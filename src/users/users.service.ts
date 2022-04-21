import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { toUserDto } from '../utils/mapper';
import { LoginUserDto } from './dto/login-user-dto';
import { comparePasswords } from '../utils/utils';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    const userInDb = await this.userRepository.findOne({ where: { username } });
    if (userInDb)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const user: UserEntity = await this.userRepository.create({
      username,
      password,
      email,
    });
    await this.userRepository.save(user);
    return toUserDto(user);
  }

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepository.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user)
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);

    const areEqual = await comparePasswords(user.password, password);
    if (!areEqual)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return toUserDto(user);
  }

  async findByPayLoad({ username }: any): Promise<UserDto> {
    return await this.findOne({ where: { username } });
  }
}
