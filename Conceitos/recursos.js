//Arquivo para mostrar alguns recursos básicos de typescript
function showLog(message) {
    console.log(message);
}
showLog("teste recursos");
var isValid = true;
var testeArray = ["teste1", "teste2"];
var testeArray2 = ["teste1", 1];
testeArray.forEach(function (element) {
    console.log("Element ");
    console.log(element);
});
// https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?gclid=CjwKCAjwqIiFBhAHEiwANg9szkSWlRNbqPd3swecgr-QHc30bfjjRS8US-7KWs3nHV4OoivFDHeYchoCZsIQAvD_BwE
var exibeMensagem = function () {
    mensagem = 'Alura';
    console.log(mensagem);
    var mensagem;
};
exibeMensagem();
var exibeMensagem2 = function () {
    var mensagemForaDoIf = 'Caelum';
    if (true) {
        var mensagemDentroDoIf = 'Alura';
        console.log(mensagemDentroDoIf); // Alura ;
    }
    console.log(mensagemForaDoIf); // Caelum 
    console.log(mensagemDentroDoIf); // Alura 
};
exibeMensagem2();
var exibeMensagemLet = function () {
    console.log("Exibe mensagem Let");
    if (true) {
        var escopoFuncao = 'Caelum';
        var escopoBloco = 'Alura';
        console.log(escopoBloco); // Alura 
    }
    //console.log(escopoBloco); não funciona
    console.log(escopoFuncao);
};
var arrayVaga = {
    "Completed": "success",
    "Messages": [
        {
            "Text": "Processado sem Erros.",
            "Type": "success"
        }
    ],
    "Result": [
        {
            "IdVagaPublicacao": 7889,
            "IdVaga": 8911,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-04-29T13:03:01.523",
            "DataFinalPublicacao": "2021-05-27T03:00:00",
            "IdLocalEstagio": 1555,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-04-29T10:03:22.233",
            "DataInicioAtividade": "2021-05-27T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "https://www.cdlpatos.com.br/vagas",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 1555,
                "IdEmpresa": 34097,
                "DescricaoLocal": "CDL Patos de Minas",
                "IdEndereco": 107405,
                "Endereco": {
                    "IdEndereco": 107405,
                    "IdPessoa": 34097,
                    "DataInicioVigencia": "2019-10-22T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Dores do Indaiá",
                    "Numero": 17,
                    "Complemento": "",
                    "Bairro": "Centro",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38700906,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Dores do Indaiá, Nº: 17, Bairro: Centro, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8911,
                "DescricaoVaga": "Entre em contato conosco:\n\nCDL de Patos de Minas\nRua Dores do Indaiá, 17 - Centro\nWHATSAPP (34) 3818-3409",
                "Requisitos": "Ensino médio completo. Necessário possuir experiência. Horário: Segunda a sexta 13:00 às 20:00. Sábado: 08:00 ás 12:00 Salário: R$ 1.100,00.\nRamo de Atividade: Alimentício.",
                "IdTipoVaga": 3049,
                "IdCargo": 2630,
                "IdEscolaridadeNecessaria": 12,
                "IdDescricaoArea": 1718,
                "IdEmpresa": 34097,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "PROMOTOR DE VENDAS",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 2630,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Promotor de Vendas",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 12,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Médio completo",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1718,
                    "Descricao": "Alimentício",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 34097,
                    "IdSubClasseCnae": 1028,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 105303,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 34097,
                        "Nome": "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS",
                        "CpfCnpj": 20746095000102,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8911,
                        "IdCurso": 1,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1,
                            "NomeCurso": "ADMINISTRAÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 69,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 69,
                            "NomeCurso": "GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 85,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 85,
                            "NomeCurso": "GESTÃO FINANCEIRA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 98,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 98,
                            "NomeCurso": "LOGÍSTICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 102,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 102,
                            "NomeCurso": "MARKETING",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 143,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 143,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 146,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 146,
                            "NomeCurso": "TECNOLOGIA EM MARKETING",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 1410,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1410,
                            "NomeCurso": "GESTÃO DE NEGÓCIOS E INOVAÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 3554,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3554,
                            "NomeCurso": "Gestão Estratégica Empresarial",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 3581,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3581,
                            "NomeCurso": "Tecnico em Logística",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8911,
                        "IdCurso": 3617,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3617,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO FINANCEIRA",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7890,
            "IdVaga": 8912,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-04-29T13:06:30.753",
            "DataFinalPublicacao": "2021-05-27T03:00:00",
            "IdLocalEstagio": 1555,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-04-29T10:06:48.987",
            "DataInicioAtividade": "2021-05-27T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "https://www.cdlpatos.com.br/vagas",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 1555,
                "IdEmpresa": 34097,
                "DescricaoLocal": "CDL Patos de Minas",
                "IdEndereco": 107405,
                "Endereco": {
                    "IdEndereco": 107405,
                    "IdPessoa": 34097,
                    "DataInicioVigencia": "2019-10-22T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Dores do Indaiá",
                    "Numero": 17,
                    "Complemento": "",
                    "Bairro": "Centro",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38700906,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Dores do Indaiá, Nº: 17, Bairro: Centro, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8912,
                "DescricaoVaga": "Entre em contato conosco: CDL de Patos de Minas Rua Dores do Indaiá, 17 - Centro WHATSAPP (34) 3818-3409",
                "Requisitos": "Ensino médio completo. Necessário possuir experiência com vendas. Horário: Segunda a sexta 08:00 às 18:00. Sábado: 08:30 ás 12;00 Salário: R$ 1.400,00 + comissão e vale transporte.\nRamo de Atividade: Atividade estética e outras Serviços de Cuidado com Beleza.",
                "IdTipoVaga": 3049,
                "IdCargo": 2652,
                "IdEscolaridadeNecessaria": 12,
                "IdDescricaoArea": 49,
                "IdEmpresa": 34097,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "RECEPCIONISTA",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 2652,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Recepcionista",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 12,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Médio completo",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 49,
                    "Descricao": "Estética",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 34097,
                    "IdSubClasseCnae": 1028,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 105303,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 34097,
                        "Nome": "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS",
                        "CpfCnpj": 20746095000102,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8912,
                        "IdCurso": 1,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1,
                            "NomeCurso": "ADMINISTRAÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 69,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 69,
                            "NomeCurso": "GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 85,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 85,
                            "NomeCurso": "GESTÃO FINANCEIRA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 102,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 102,
                            "NomeCurso": "MARKETING",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 120,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 120,
                            "NomeCurso": "PROCESSOS GERENCIAIS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 143,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 143,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 146,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 146,
                            "NomeCurso": "TECNOLOGIA EM MARKETING",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 147,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 147,
                            "NomeCurso": "TECNOLOGIA EM MODA E ESTILO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 1409,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1409,
                            "NomeCurso": "ESTÉTICA E COSMÉTICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 1410,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1410,
                            "NomeCurso": "GESTÃO DE NEGÓCIOS E INOVAÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 3554,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3554,
                            "NomeCurso": "Gestão Estratégica Empresarial",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8912,
                        "IdCurso": 3617,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3617,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO FINANCEIRA",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7891,
            "IdVaga": 8913,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-04-29T13:11:38.107",
            "DataFinalPublicacao": "2021-05-27T03:00:00",
            "IdLocalEstagio": 2853,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-04-29T10:11:57.277",
            "DataInicioAtividade": "2021-05-27T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "https://www.cdlpatos.com.br/vagas",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 2853,
                "IdEmpresa": 34097,
                "DescricaoLocal": "CDL PATOS DE MINAS",
                "IdEndereco": 107405,
                "Endereco": {
                    "IdEndereco": 107405,
                    "IdPessoa": 34097,
                    "DataInicioVigencia": "2019-10-22T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Dores do Indaiá",
                    "Numero": 17,
                    "Complemento": "",
                    "Bairro": "Centro",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38700906,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Dores do Indaiá, Nº: 17, Bairro: Centro, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8913,
                "DescricaoVaga": "Entre em contato conosco: CDL de Patos de Minas Rua Dores do Indaiá, 17 - Centro WHATSAPP (34) 3818-3409",
                "Requisitos": "Ensino médio completo. Necessário possuir experiência com entregas. Possuir curso de moto frete. Habilitação A/B. Horário: Segunda a sexta 07:30 às 17:30. Sábado: 07:30 ás 11:30 Salário: comercial + insalubridade.\nRamo de Atividade: Tintas e Material de para a Pintura.",
                "IdTipoVaga": 3049,
                "IdCargo": 1427,
                "IdEscolaridadeNecessaria": 12,
                "IdDescricaoArea": 5893,
                "IdEmpresa": 34097,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "ENTREGADOR",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 1427,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Entregador",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 12,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Médio completo",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 5893,
                    "Descricao": "TINTAS E MATERIAIS PARA PINTURA.",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 34097,
                    "IdSubClasseCnae": 1028,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 105303,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 34097,
                        "Nome": "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS",
                        "CpfCnpj": 20746095000102,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1,
                            "NomeCurso": "ADMINISTRAÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 11,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 11,
                            "NomeCurso": "CIÊNCIAS BIOLÓGICAS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 36,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 36,
                            "NomeCurso": "EDUCAÇÃO FÍSICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 37,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 37,
                            "NomeCurso": "EDUCAÇÃO FÍSICA - BACHARELADO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 43,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 43,
                            "NomeCurso": "ENGENHARIA AMBIENTAL E SANITÁRIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 44,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 44,
                            "NomeCurso": "ENGENHARIA CIVIL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 45,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 45,
                            "NomeCurso": "ENGENHARIA DE MINAS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 46,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 46,
                            "NomeCurso": "ENGENHARIA DE PRODUÇÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 49,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 49,
                            "NomeCurso": "ENGENHARIA ELÉTRICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 50,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 50,
                            "NomeCurso": "ENGENHARIA MECÂNICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 51,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 51,
                            "NomeCurso": "ENGENHARIA QUÍMICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 69,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 69,
                            "NomeCurso": "GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 98,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 98,
                            "NomeCurso": "LOGÍSTICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 140,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 140,
                            "NomeCurso": "TECNOLOGIA EM AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 141,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 141,
                            "NomeCurso": "TECNOLOGIA EM ALIMENTOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 142,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 142,
                            "NomeCurso": "TECNOLOGIA EM FOTOGRAFIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 143,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 143,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 144,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 144,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DE AGRONEGÓCIOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 145,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 145,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DE RECURSOS HUMANOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 146,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 146,
                            "NomeCurso": "TECNOLOGIA EM MARKETING",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 147,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 147,
                            "NomeCurso": "TECNOLOGIA EM MODA E ESTILO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 164,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 164,
                            "NomeCurso": "Engenharia Mecatrônica",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 175,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 175,
                            "NomeCurso": "Técnico em Enfermagem",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 208,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 208,
                            "NomeCurso": "engenharia de alimentos",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1218,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1218,
                            "NomeCurso": "Técnico em Segurança do Trabalho",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1230,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1230,
                            "NomeCurso": "ENGENHARIA ELETRÔNICA E DE TELECOMUNICAÇÕES",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1290,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1290,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1301,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1301,
                            "NomeCurso": "Técnico em Farmácia",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1325,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1325,
                            "NomeCurso": "TECNOLOGIA em Gestão Serviços Jurídicos Cartorários e Notariais",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 1390,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1390,
                            "NomeCurso": "Educação Física - Bacharelado e Licenciatura",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 3479,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3479,
                            "NomeCurso": "Engenharia de Agrimensura",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 3581,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3581,
                            "NomeCurso": "Tecnico em Logística",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 3603,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3603,
                            "NomeCurso": "TECNOLOGIA EM MECÂNICA DE PRECISÃO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 3606,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3606,
                            "NomeCurso": "TÉCNICO EM MEIO AMBIENTE",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8913,
                        "IdCurso": 3617,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3617,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO FINANCEIRA",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7946,
            "IdVaga": 8968,
            "IdStatusVaga": 3119,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-04T12:39:23.807",
            "DataFinalPublicacao": "2021-05-31T06:00:00",
            "IdLocalEstagio": 1675,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-04T09:40:27.08",
            "DataInicioAtividade": "2021-05-31T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "recrutamentoygloo@gmail.com",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 1675,
                "IdEmpresa": 118728,
                "DescricaoLocal": "Sorvetes Ygloo",
                "IdEndereco": 112729,
                "Endereco": {
                    "IdEndereco": 112729,
                    "IdPessoa": 118728,
                    "DataInicioVigencia": "2020-02-27T00:00:00",
                    "DataFimVigencia": "2020-10-01T00:00:00",
                    "Logradouro": "Rua Mata dos Fernandes",
                    "Numero": 619,
                    "Complemento": "",
                    "Bairro": "Vila Garcia",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38703174,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Mata dos Fernandes, Nº: 619, Bairro: Vila Garcia, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8968,
                "DescricaoVaga": "REALIZAR MANUTENÇÃO PREVENTIVA E CORRETIVA EM TODOS OS EQUIPAMENTOS - ORIENTAR PREVENTIVAMENTE TODOS OS COLABORADORES E PARCEIROS, ENVOLVIDOS COM OS EQUIPAMENTOS SOBRE A FORMA CORRETA DE MANUSEIO. - REALIZAR PLOTAGEM - CONSERTAR EQUIPAMENTOS PARA REVENDA - MANTER O PÁTIO DE IMOBILIZADO ORGANIZADO - ENTREGAR E RECOLHER FREEZER DE ACORDO COM A DEMANDA REPASSADA PELO GESTOR DA LOGÍSTICA - ATENDIMENTO A TODOS OS CHAMADOS PARA REPAROS DE ACORDO COM AS ORDENS DE SERVIÇOS GERADAS.",
                "Requisitos": "SEGUNDO GRAU COMPLETO - HABILITAÇÃO A/B. IDADE 20 A 45 ANOS. DISPONIBILIDADE DE VIAGENS. DISPONIBILIDADE DE HORÁRIOS. PROATIVIDADE. CONHECIMENTO BÁSICO DE INFORMÁTICA, EXPERIÊNCIA NA FUNÇÃO, DESEJÁVEL CONHECIMENTO NA ÁREA DE ALIMENTOS.\n\nBENEFÍCIOS: SALÁRIO SERÁ DIVULGADO NO PROCESSO SELETIVO.\n\nINTERESSADOS ENVIAR CURRÍCULO COM FOTO E INDICAÇÃO DA VAGA PRETENDIDA PARA:\n\nrecrutamentoygloo@gmail.com",
                "IdTipoVaga": 3049,
                "IdCargo": 2930,
                "IdEscolaridadeNecessaria": 12,
                "IdDescricaoArea": 5552,
                "IdEmpresa": 118728,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "Técnico em Refrigeração",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 2930,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Técnico em Refrigeração",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 12,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Médio completo",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 5552,
                    "Descricao": "Gelateria",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 118728,
                    "IdSubClasseCnae": 1330,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 110274,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 118728,
                        "Nome": "GELATERIA ANTARTICA LTDA",
                        "CpfCnpj": 879901000103,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8968,
                        "IdCurso": 49,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 49,
                            "NomeCurso": "ENGENHARIA ELÉTRICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8968,
                        "IdCurso": 50,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 50,
                            "NomeCurso": "ENGENHARIA MECÂNICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8968,
                        "IdCurso": 164,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 164,
                            "NomeCurso": "Engenharia Mecatrônica",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8968,
                        "IdCurso": 1230,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1230,
                            "NomeCurso": "ENGENHARIA ELETRÔNICA E DE TELECOMUNICAÇÕES",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 3119,
                "IdTabelaDescritiva": 2,
                "Descricao": "Vaga disponibilizada com informações de rede social/internet",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7965,
            "IdVaga": 8987,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-05T10:56:37.217",
            "DataFinalPublicacao": "2021-05-26T03:00:00",
            "IdLocalEstagio": 1555,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-05T07:57:05.713",
            "DataInicioAtividade": "2021-05-26T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "cdltalentos@cdlpatos.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 1555,
                "IdEmpresa": 34097,
                "DescricaoLocal": "CDL Patos de Minas",
                "IdEndereco": 107405,
                "Endereco": {
                    "IdEndereco": 107405,
                    "IdPessoa": 34097,
                    "DataInicioVigencia": "2019-10-22T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Dores do Indaiá",
                    "Numero": 17,
                    "Complemento": "",
                    "Bairro": "Centro",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38700906,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Dores do Indaiá, Nº: 17, Bairro: Centro, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8987,
                "DescricaoVaga": "ATENDIMENTO E VENDAS DE PRODUTOS PARA ORDENHA, ATUAÇÃO COM VENDAS E NEGOCIAÇÕES, VISITAS E CONFECÇÃO DE RELATÓRIOS.",
                "Requisitos": "Experiência com venda de equipamentos de ordenha e produtos para ordenha e Habilitação B.\nHabilidades: Facilidade em trabalho em grupo e comunicação assertiva.\nSexo: Indiferente.\nFormação: Ensino superior completo ou graduação em curso dos cursos de Agronomia, Zootecnia, Gestão Comercial e Gestão de Agronegócio.\nHorário de trabalho: 07:30 às 17:30.\nDias da semana: Segunda a Sexta.\nExperiências:  com venda de produtos em propriedades leiteiras .\n Salário: a combinar .\t\nBenefícios:  veiculo da empresa .\nInteressados devem encaminhar currículo atualizado por e-mail  e escrever em assunto \"Vendas Administração\" para: cdltalentos@cdlpatos.com.br",
                "IdTipoVaga": 3049,
                "IdCargo": 3020,
                "IdEscolaridadeNecessaria": 14,
                "IdDescricaoArea": 1604,
                "IdEmpresa": 34097,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "VENDEDOR (A) EXTERNO",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 3020,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Vendedor Externo",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 14,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Curso superior completo",
                    "TabelaDescritiva": null,
                    "Ordem": 7
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1604,
                    "Descricao": "Agronegócios",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 34097,
                    "IdSubClasseCnae": 1028,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 105303,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 34097,
                        "Nome": "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS",
                        "CpfCnpj": 20746095000102,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8987,
                        "IdCurso": 3,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3,
                            "NomeCurso": "AGRONOMIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 69,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 69,
                            "NomeCurso": "GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 75,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 75,
                            "NomeCurso": "GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 109,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 109,
                            "NomeCurso": "MEDICINA VETERINÁRIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 140,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 140,
                            "NomeCurso": "TECNOLOGIA EM AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 144,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 144,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DE AGRONEGÓCIOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 150,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 150,
                            "NomeCurso": "ZOOTECNIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8987,
                        "IdCurso": 1290,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1290,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7966,
            "IdVaga": 8988,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-05T11:00:19.043",
            "DataFinalPublicacao": "2021-05-26T03:00:00",
            "IdLocalEstagio": 1555,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-05T08:00:47.04",
            "DataInicioAtividade": "2021-05-26T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "cdltalentos@cdlpatos.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 1555,
                "IdEmpresa": 34097,
                "DescricaoLocal": "CDL Patos de Minas",
                "IdEndereco": 107405,
                "Endereco": {
                    "IdEndereco": 107405,
                    "IdPessoa": 34097,
                    "DataInicioVigencia": "2019-10-22T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Dores do Indaiá",
                    "Numero": 17,
                    "Complemento": "",
                    "Bairro": "Centro",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38700906,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Dores do Indaiá, Nº: 17, Bairro: Centro, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 8988,
                "DescricaoVaga": "ATENDIMENTO E VENDAS DE PRODUTOS PARA ORDENHA, ATUAÇÃO COM VENDAS E NEGOCIAÇÕES, VISITAS E CONFECÇÃO DE RELATÓRIOS.",
                "Requisitos": "Experiência com venda de equipamentos de ordenha e produtos para ordenha e Habilitação B. Habilidades: Facilidade em trabalho em grupo e comunicação assertiva. Sexo: Indiferente. Formação: Ensino superior completo ou graduação em curso dos cursos de Agronomia, Zootecnia, Gestão Comercial e Gestão de Agronegócio. Horário de trabalho: 07:30 às 17:30. Dias da semana: Segunda a Sexta. Experiências: com venda de produtos em propriedades leiteiras . Salário: a combinar . Benefícios: veiculo da empresa . Interessados devem encaminhar currículo atualizado por e-mail e escrever em assunto \"Vendas Administração\" para: cdltalentos@cdlpatos.com.br",
                "IdTipoVaga": 3049,
                "IdCargo": 3020,
                "IdEscolaridadeNecessaria": 13,
                "IdDescricaoArea": 1604,
                "IdEmpresa": 34097,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "VENDEDOR (A) EXTERNO",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 3020,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Vendedor Externo",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 13,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Graduação em Curso",
                    "TabelaDescritiva": null,
                    "Ordem": 6
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1604,
                    "Descricao": "Agronegócios",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 34097,
                    "IdSubClasseCnae": 1028,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 105303,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 34097,
                        "Nome": "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS",
                        "CpfCnpj": 20746095000102,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 8988,
                        "IdCurso": 3,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3,
                            "NomeCurso": "AGRONOMIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 69,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 69,
                            "NomeCurso": "GESTÃO COMERCIAL",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 75,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 75,
                            "NomeCurso": "GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 109,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 109,
                            "NomeCurso": "MEDICINA VETERINÁRIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 140,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 140,
                            "NomeCurso": "TECNOLOGIA EM AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 144,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 144,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DE AGRONEGÓCIOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 150,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 150,
                            "NomeCurso": "ZOOTECNIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 8988,
                        "IdCurso": 1290,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1290,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7981,
            "IdVaga": 9003,
            "IdStatusVaga": 5,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-05T14:58:11.537",
            "DataFinalPublicacao": "2021-05-21T03:00:00",
            "IdLocalEstagio": 4152,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-05T11:59:15.017",
            "DataInicioAtividade": "2021-05-24T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "lucasfaria@contrutorajpg.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 4152,
                "IdEmpresa": 118390,
                "DescricaoLocal": "CONSTRUTORA JPG",
                "IdEndereco": 126261,
                "Endereco": {
                    "IdEndereco": 126261,
                    "IdPessoa": 118390,
                    "DataInicioVigencia": "2021-05-05T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Rua Rio Guaporé",
                    "Numero": 221,
                    "Complemento": "",
                    "Bairro": "Sobradinho",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38701132,
                    "Cidade": "Patos de Minas",
                    "UF": "MG",
                    "EnderecoCompleto": "Rua Rio Guaporé, Nº: 221, Bairro: Sobradinho, Cidade: Patos de Minas"
                }
            },
            "Vaga": {
                "IdVaga": 9003,
                "DescricaoVaga": "Medições diárias e acompanhamento da obra, preenchimento de materiais e organizaçao das planilhas diariamente.",
                "Requisitos": "Possuir carteira de habilitação. \nHabilidades: Excel e boa organização.\nFormação: ensino medio completo e 4º ano em diante do curso de Engenharia Civil.\nHorário de trabalho: 30h semanais (a combinar).\nDias da semana: segunda a sexta.\nExperiências: Não necessária.\nBenefícios: Vale transporte / Vale alimentação.\nEstágio não remunerado.\nE-mail para os candidatos enviarem currículos: lucasfaria@contrutorajpg.com.br",
                "IdTipoVaga": 1,
                "IdCargo": 3057,
                "IdEscolaridadeNecessaria": 13,
                "IdDescricaoArea": 5761,
                "IdEmpresa": 118390,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "ESTAGIARIO (A) DE ENGENHARIA CIVIL",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 3057,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Estágio",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 13,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Graduação em Curso",
                    "TabelaDescritiva": null,
                    "Ordem": 6
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 1,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "Estágio supervisionado obrigatório",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 5761,
                    "Descricao": "Construtora",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 118390,
                    "IdSubClasseCnae": 610,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 121210,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 118390,
                        "Nome": "CONSTRUTORA JPG",
                        "CpfCnpj": 12410708000108,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 9003,
                        "IdCurso": 44,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 44,
                            "NomeCurso": "ENGENHARIA CIVIL",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 5,
                "IdTabelaDescritiva": 2,
                "Descricao": "Em aberto",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7987,
            "IdVaga": 9009,
            "IdStatusVaga": 3119,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-06T12:09:49.377",
            "DataFinalPublicacao": "2021-05-20T03:00:00",
            "IdLocalEstagio": 2771,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-06T09:10:11.473",
            "DataInicioAtividade": "2021-05-20T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "rh.minas@daterracoffee.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 2771,
                "IdEmpresa": 154952,
                "DescricaoLocal": "DATERRA ATIVIDADES RURAIS",
                "IdEndereco": 117873,
                "Endereco": {
                    "IdEndereco": 117873,
                    "IdPessoa": 154952,
                    "DataInicioVigencia": "2020-06-26T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Av. Faria Pereira",
                    "Numero": 20,
                    "Complemento": "",
                    "Bairro": "Morada do Sol",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38740000,
                    "Cidade": "Patrocínio",
                    "UF": "MG",
                    "EnderecoCompleto": "Av. Faria Pereira, Nº: 20, Bairro: Morada do Sol, Cidade: Patrocínio"
                }
            },
            "Vaga": {
                "IdVaga": 9009,
                "DescricaoVaga": "CONTRIBUIR COM A DISTRIBUIÇÃO DE ATIVIDADES NO CAMPO E REGULAGEM DE MAQUINÁRIO DE USO DA ATIVIDADE. DENTRE OUTRAS ATIVIDADES CORRELACIONADAS  A FUNÇÃO.",
                "Requisitos": "PRÉ - REQUISITO:\nRESIDIR EM PATROCÍNIO - MG - CNH A - CURSO TÉCNICO AGRÍCOLA .\n\nENVIAR CURRÍCULO:\nrh.minas@daterracoffee.com.br",
                "IdTipoVaga": 3049,
                "IdCargo": 3240,
                "IdEscolaridadeNecessaria": 3065,
                "IdDescricaoArea": 1604,
                "IdEmpresa": 154952,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "ASSISTENTE AGRÍCOLA - PATROCÍNIO - MG",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 3240,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Assistente Agrícola",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 3065,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Curso Técnico",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1604,
                    "Descricao": "Agronegócios",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 154952,
                    "IdSubClasseCnae": 42,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 112196,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 154952,
                        "Nome": "DATERRA COFFEE - ATIVIDADES RURAIS LTDA",
                        "CpfCnpj": 51894202001218,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 9009,
                        "IdCurso": 3,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3,
                            "NomeCurso": "AGRONOMIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9009,
                        "IdCurso": 140,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 140,
                            "NomeCurso": "TECNOLOGIA EM AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9009,
                        "IdCurso": 144,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 144,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DE AGRONEGÓCIOS",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9009,
                        "IdCurso": 1290,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1290,
                            "NomeCurso": "TECNOLOGIA EM GESTÃO DO AGRONEGÓCIO",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9009,
                        "IdCurso": 3603,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3603,
                            "NomeCurso": "TECNOLOGIA EM MECÂNICA DE PRECISÃO",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 3119,
                "IdTabelaDescritiva": 2,
                "Descricao": "Vaga disponibilizada com informações de rede social/internet",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7988,
            "IdVaga": 9010,
            "IdStatusVaga": 3119,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-06T12:13:11.1",
            "DataFinalPublicacao": "2021-05-20T03:00:00",
            "IdLocalEstagio": 2771,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-06T09:13:46.443",
            "DataInicioAtividade": "2021-05-20T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "rh.minas@daterracoffee.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 2771,
                "IdEmpresa": 154952,
                "DescricaoLocal": "DATERRA ATIVIDADES RURAIS",
                "IdEndereco": 117873,
                "Endereco": {
                    "IdEndereco": 117873,
                    "IdPessoa": 154952,
                    "DataInicioVigencia": "2020-06-26T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Av. Faria Pereira",
                    "Numero": 20,
                    "Complemento": "",
                    "Bairro": "Morada do Sol",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38740000,
                    "Cidade": "Patrocínio",
                    "UF": "MG",
                    "EnderecoCompleto": "Av. Faria Pereira, Nº: 20, Bairro: Morada do Sol, Cidade: Patrocínio"
                }
            },
            "Vaga": {
                "IdVaga": 9010,
                "DescricaoVaga": "EXECUTAR MANUTENÇÃO ELÉTRICA CORRETIVA E PREVENTIVA DE MÁQUINAS AGRÍCOLAS, DISPONIBILDADE PARA TRABALHO NOTURNO.",
                "Requisitos": "RESIDIR EM PATROCÍNIO -MG- ENSINO MÉDIO - NR 10.\nEnviar currículo para: rh.minas@daterracoffee.com.br Ou entregar na filial: Av. Faria Pereira, 110 - Morada do Sol - Patrocínio - MG",
                "IdTipoVaga": 3049,
                "IdCargo": 1281,
                "IdEscolaridadeNecessaria": 166,
                "IdDescricaoArea": 1604,
                "IdEmpresa": 154952,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "ELETRICISTA INDUSTRIAL - PATROCÍNIO - MG",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 1281,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Eletricista Industrial",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 166,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Fundamental Completo",
                    "TabelaDescritiva": null,
                    "Ordem": 3
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1604,
                    "Descricao": "Agronegócios",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 154952,
                    "IdSubClasseCnae": 42,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 112196,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 154952,
                        "Nome": "DATERRA COFFEE - ATIVIDADES RURAIS LTDA",
                        "CpfCnpj": 51894202001218,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 9010,
                        "IdCurso": 3,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3,
                            "NomeCurso": "AGRONOMIA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9010,
                        "IdCurso": 49,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 49,
                            "NomeCurso": "ENGENHARIA ELÉTRICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9010,
                        "IdCurso": 50,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 50,
                            "NomeCurso": "ENGENHARIA MECÂNICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9010,
                        "IdCurso": 164,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 164,
                            "NomeCurso": "Engenharia Mecatrônica",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9010,
                        "IdCurso": 1230,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 1230,
                            "NomeCurso": "ENGENHARIA ELETRÔNICA E DE TELECOMUNICAÇÕES",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9010,
                        "IdCurso": 3603,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3603,
                            "NomeCurso": "TECNOLOGIA EM MECÂNICA DE PRECISÃO",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 3119,
                "IdTabelaDescritiva": 2,
                "Descricao": "Vaga disponibilizada com informações de rede social/internet",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        },
        {
            "IdVagaPublicacao": 7989,
            "IdVaga": 9011,
            "IdStatusVaga": 3119,
            "Quantidade": 1,
            "QuantidadeDeficiente": 0,
            "CargaHorariaSemanal": null,
            "CargaHorariaDiaria": null,
            "DataInicialPublicacao": "2021-05-06T12:17:04.557",
            "DataFinalPublicacao": "2021-05-20T03:00:00",
            "IdLocalEstagio": 4032,
            "QuantidadeCandidatosInscritos": null,
            "Salario": null,
            "EmpregoTemporario": false,
            "DivulgarEmpresa": true,
            "DataHoraLiberacao": "2021-05-06T09:17:35.003",
            "DataInicioAtividade": "2021-05-20T00:00:00",
            "TempoDiasTemporario": null,
            "HoraInicioAntesIntervalo": null,
            "HoraFimAntesIntervalo": null,
            "HoraInicioAposIntervalo": null,
            "HoraFimAposIntervalo": null,
            "InscricaoExterna": true,
            "SiteInscricaoExterna": "rh.minas@daterracoffee.com.br",
            "DataHoraEncerramentoVaga": null,
            "LocalEstagio": {
                "IdLocalEstagio": 4032,
                "IdEmpresa": 154952,
                "DescricaoLocal": "DATERRA COFFEE",
                "IdEndereco": 125350,
                "Endereco": {
                    "IdEndereco": 125350,
                    "IdPessoa": 154952,
                    "DataInicioVigencia": "2021-02-02T00:00:00",
                    "DataFimVigencia": null,
                    "Logradouro": "Avenida Faria Pereira",
                    "Numero": 110,
                    "Complemento": "",
                    "Bairro": "Morada do Sol",
                    "IdTipoDeEndereco": 13,
                    "IdTipoDeLogradouro": null,
                    "CEP": 38744880,
                    "Cidade": "Patrocínio",
                    "UF": "MG",
                    "EnderecoCompleto": "Avenida Faria Pereira, Nº: 110, Bairro: Morada do Sol, Cidade: Patrocínio"
                }
            },
            "Vaga": {
                "IdVaga": 9011,
                "DescricaoVaga": "Executar atividades para a manutenção corretiva e preventiva e montagem das estruturas metálicas.",
                "Requisitos": "Residir em Patrocínio - MG.\nNR 35.\nEnsino médio.\n\nEnviar currículo para:\n\nrh.minas@daterracoffee.com.br\n\nOu entregar na filial: Av. Faria Pereira, 110 - Morada do Sol - Patrocínio - MG",
                "IdTipoVaga": 3049,
                "IdCargo": 1281,
                "IdEscolaridadeNecessaria": 12,
                "IdDescricaoArea": 1604,
                "IdEmpresa": 154952,
                "TempoExperienciaMesesArea": 0,
                "TempoExperienciaMesesGeral": 0,
                "QuantidadeReferenciaProfissional": 0,
                "QuantidadeCandidatos": null,
                "PercentualConclusaoCursoMinimo": null,
                "PercentualConclusaoCursoMaximo": null,
                "Nome": "MECÂNICO INDUSTRIAL - PATROCÍNIO - MG",
                "CursosEspecificos": null,
                "Cargo": {
                    "IdTabelaDescritivaConteudo": 1281,
                    "IdTabelaDescritiva": 30,
                    "Descricao": "Eletricista Industrial",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "EscolaridadeNecessaria": {
                    "IdTabelaDescritivaConteudo": 12,
                    "IdTabelaDescritiva": 5,
                    "Descricao": "Ensino Médio completo",
                    "TabelaDescritiva": null,
                    "Ordem": 5
                },
                "TipoVaga": {
                    "IdTabelaDescritivaConteudo": 3049,
                    "IdTabelaDescritiva": 1,
                    "Descricao": "CLT",
                    "TabelaDescritiva": null,
                    "Ordem": null
                },
                "AreaProfissional": {
                    "IdTabelaDescritivaConteudo": 1604,
                    "Descricao": "Agronegócios",
                    "IdTabelaDescritiva": 1
                },
                "Empresa": {
                    "IdEmpresa": 154952,
                    "IdSubClasseCnae": 42,
                    "Descricao": null,
                    "Site": null,
                    "IdDocumentoLogo": 112196,
                    "IdSituacaoCadastro": null,
                    "Missao": null,
                    "Visao": null,
                    "IdNumeroFuncionarios": null,
                    "Ativa": true,
                    "SubclasseCnae": null,
                    "Pessoa": {
                        "IdPessoa": 154952,
                        "Nome": "DATERRA COFFEE - ATIVIDADES RURAIS LTDA",
                        "CpfCnpj": 51894202001218,
                        "TipoPessoa": "PJ",
                        "PessoaUsuario": null
                    },
                    "OrgaoPublico": false,
                    "IdDocumento": null,
                    "NomeFantasia": [],
                    "Representante": [],
                    "EmpresaCurso": [],
                    "LocalEstagio": [],
                    "SituacaoCadastro": null,
                    "NumeroFuncionarios": null
                },
                "VagaHabilidade": [],
                "VagaIdioma": [],
                "VagaBeneficio": [],
                "CursoVaga": [
                    {
                        "IdVaga": 9011,
                        "IdCurso": 50,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 50,
                            "NomeCurso": "ENGENHARIA MECÂNICA",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9011,
                        "IdCurso": 164,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 164,
                            "NomeCurso": "Engenharia Mecatrônica",
                            "IdTipoCurso": 147
                        }
                    },
                    {
                        "IdVaga": 9011,
                        "IdCurso": 3603,
                        "Curso": {
                            "CursoUnipam": null,
                            "IdCurso": 3603,
                            "NomeCurso": "TECNOLOGIA EM MECÂNICA DE PRECISÃO",
                            "IdTipoCurso": 147
                        }
                    }
                ]
            },
            "StatusVaga": {
                "IdTabelaDescritivaConteudo": 3119,
                "IdTabelaDescritiva": 2,
                "Descricao": "Vaga disponibilizada com informações de rede social/internet",
                "TabelaDescritiva": null,
                "Ordem": null
            },
            "Candidato": []
        }
    ],
    "TotalRecords": 194,
    "StatusCode": 0
};
var filtroVagaEmpresa = arrayVaga.Result.filter(function (x) { return x.Vaga.Empresa.Pessoa.Nome === "CAMARA DE DIRIGENTES LOJISTAS DE PATOS DE MINAS"; });
// filtroVagaEmpresa.forEach(element => {
//     console.log(`Vaga: ${element.Vaga.Nome} - Descrição: ${element.Vaga.DescricaoVaga}`);
// });
for (var i = 0; i < filtroVagaEmpresa.length; i++) {
    console.log("Vaga: " + filtroVagaEmpresa[i].Vaga.Nome + " - Descri\u00E7\u00E3o: " + filtroVagaEmpresa[i].Vaga.DescricaoVaga);
}
//# sourceMappingURL=recursos.js.map