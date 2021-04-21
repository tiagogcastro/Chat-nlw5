import { getCustomRepository, Repository } from 'typeorm';
import Setting from '../entities/Setting';
import SettingsRepository from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {
    const user = await this.settingsRepository.findOne({username});
  
    if(user) {
      throw new Error('User already exists');
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    });
  
    await this.settingsRepository.save(settings)

    return settings;
  }
}

export default SettingsService;