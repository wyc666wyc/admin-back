import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class Source {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  username: string

  @Column({ length: 16 })
  password: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date
}
