class AtividadeDto {
  code: string
  text: string

  constructor(data: any) {
    this.code = data.code
    this.text = data.text
  }
}

class SimplesDto {
  optante: boolean
  data_opcao: string
  data_exclusao: string | null
  ultima_atualizacao: string

  constructor(data: any) {
    this.optante = data.optante
    this.data_opcao = data.data_opcao
    this.data_exclusao = data.data_exclusao
    this.ultima_atualizacao = data.ultima_atualizacao
  }
}

class BillingDto {
  free: boolean
  database: boolean

  constructor(data: any) {
    this.free = data.free
    this.database = data.database
  }
}

export class CompanyBrazilDto {
  abertura: string
  situacao: string
  tipo: string
  nome: string
  porte: string
  natureza_juridica: string
  atividade_principal: AtividadeDto[]
  logradouro: string
  numero: string
  municipio: string
  bairro: string
  uf: string
  cep: string
  email: string
  telefone: string
  data_situacao: string
  cnpj: string
  ultima_atualizacao: string
  status: string
  fantasia: string
  complemento: string
  efr: string
  motivo_situacao: string
  situacao_especial: string
  data_situacao_especial: string
  atividades_secundarias: AtividadeDto[]
  capital_social: string
  qsa: any[]
  simples: SimplesDto
  simei: SimplesDto
  extra: Record<string, unknown>
  billing: BillingDto

  constructor(data: any) {
    this.abertura = data.abertura
    this.situacao = data.situacao
    this.tipo = data.tipo
    this.nome = data.nome
    this.porte = data.porte
    this.natureza_juridica = data.natureza_juridica
    this.atividade_principal = (data.atividade_principal || []).map((a: any) => new AtividadeDto(a))
    this.logradouro = data.logradouro
    this.numero = data.numero
    this.municipio = data.municipio
    this.bairro = data.bairro
    this.uf = data.uf
    this.cep = data.cep
    this.email = data.email
    this.telefone = data.telefone
    this.data_situacao = data.data_situacao
    this.cnpj = data.cnpj
    this.ultima_atualizacao = data.ultima_atualizacao
    this.status = data.status
    this.fantasia = data.fantasia
    this.complemento = data.complemento
    this.efr = data.efr
    this.motivo_situacao = data.motivo_situacao
    this.situacao_especial = data.situacao_especial
    this.data_situacao_especial = data.data_situacao_especial
    this.atividades_secundarias = (data.atividades_secundarias || []).map((a: any) => new AtividadeDto(a))
    this.capital_social = data.capital_social
    this.qsa = data.qsa || []
    this.simples = new SimplesDto(data.simples)
    this.simei = new SimplesDto(data.simei)
    this.extra = data.extra || {}
    this.billing = new BillingDto(data.billing)
  }
}
