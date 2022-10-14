module.exports =  ControllerTemplate = (LowerName, UpperName) => {
  return const baseString = `
  @Entity({ schema: 'public', name: '${LowerName}' })
export class ${UpperName}Entity extends BasicEnt {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  ip_register: string;

  @Column({ default: false })
  mobile_verified: boolean;

  @Column({ default: false })
  email_verified: boolean;

  @Column({ default: false })
  g2_verified: boolean;

  @Column({ default: false })
  sync_crypto: boolean;

  @Column({ nullable: true })
  version_crypto: string;

  @Column({ nullable: true, default: false })
  complete_crypto: boolean;

  @Column("simple-json", { nullable: true })
  last_success: { ip: string, date: string };

  @Column("simple-json", { nullable: true })
  last_error: { ip: string, date: string };

  @Column({ type: "enum", enum: StatusUserEnum, default: StatusUserEnum.ACTIVE })
  status: StatusUserEnum;
  
}
  `
}