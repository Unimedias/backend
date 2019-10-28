const schema = {
  type: 'object',
  properties: {
    student: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          pattern: 'Felipe Andrade|Matheus Mandotti|Vinicius Pereira|Aparecido Freitas|Mariana Dias'
        },
        college: {
          type: 'string',
          pattern: 'Instituto Mauá de Tecnologia|Universidade Anhembi Morumbi'
        },
        course: {
          type: 'string',
          pattern: 'Engenharia de Computação|Engenharia de Controle e Automação|Engenharia Química|Engenharia de Alimentos|Medicina Veterinária'
        },
        moment: {
          type: 'string',
          pattern: '1º Ano|3º Ano|4º Ano|6º Ano|1º Semestre|5º Semestre|8º Semestre|12º Semestre'
        },
        years: {
          type: 'array',
          minItems: 1,
          maxItems: 6,
          items: {
            type: 'object',
            properties: {
              label: {
                type: 'integer',
                minimum: 2000,
                maximum: 2019,
                faker: 'random.number'
              },
              cr: {
                type: 'number',
                minimum: 0,
                maximum: 10,
                pattern: '[0-9]{1}\\.[0-9]{1}'
              },
              overallAverage: {
                type: 'number',
                minimum: 0,
                maximum: 10,
                pattern: '[0-9]{1}\\.[0-9]{1}'
              },
              subjects: {
                type: 'array',
                minItems: 1,
                maxItems: 10,
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      pattern: 'Banco de Dados|Sistemas e Sinais|Sistemas de Controle I|Cálculo I|Cálculo II|Mecânica Geral|Física I|Física II|Inteligência Artificial|Ciência de Dados'
                    },
                    duration: {
                      type: 'string',
                      pattern: 'Anual|Semestral'
                    },
                    exams: {
                      type: 'array',
                      minItems: 0,
                      maxItems: 6,
                      items: {
                        type: 'object',
                        properties: {
                          label: {
                            type: 'string',
                            pattern: 'P1|P2|PS1|P3|P4|PS2'
                          },
                          grade: {
                            type: 'number',
                            minimum: 0,
                            maximum: 10,
                            pattern: '|[0-9]{1}\\.[0-9]{1}|'
                          },
                          weight: {
                            type: 'number',
                            minimum: 0.1,
                            maximum: 0.6,
                            pattern: '0\\.[0-9]{1}'
                          },
                          replace: {
                            type: 'array',
                            minItems: 0,
                            maxItems: 2,
                            items: {
                              type: 'string',
                              pattern: 'P1|P2|P3|P4'
                            }
                          }
                        },
                        required: ['label', 'grade', 'weight', 'replace']
                      }
                    },
                    assigns: {
                      type: 'array',
                      minItems: 0,
                      maxItems: 16,
                      items: {
                        type: 'object',
                        properties: {
                          label: {
                            type: 'string',
                            pattern: 'T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15|T16'
                          },
                          grade: {
                            type: 'number',
                            minimum: 0,
                            maximum: 10,
                            pattern: '|[0-9]{1}\\.[0-9]{1}|'
                          },
                          weight: {
                            type: 'number',
                            minimum: 0.1,
                            maximum: 0.6,
                            pattern: '0\\.[0-9]{1}'
                          },
                          replace: {
                            type: 'array',
                            minItems: 0,
                            maxItems: 1,
                            items: {
                              type: 'string',
                              pattern: 'T3|T5|T7'
                            }
                          }
                        },
                        required: ['label', 'grade', 'weight', 'replace']
                      }
                    }
                  },
                  required: ['name', 'duration', 'exams', 'assigns']
                }
              }
            },
            required: ['label', 'cr', 'overallAverage', 'subjects']
          }
        }
      },
      required: ['name', 'college', 'course', 'moment', 'years']
    },
  },
  required: ['student']
}

module.exports = schema;
