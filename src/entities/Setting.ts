import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity('settings')
class Settings {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Settings;