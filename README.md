# APS8
Repositório da APS do Oitavo Semestre

Protótipo de Sistema Distribuído feito em Spring Boot ( Java ) + React com Redux ( JavaScript ) + H2 Database ( Database em Memória ) + Webpack ( Create-React-App com Template Redux )

Possui três entidades ( User, Role, Report ) com relacionamentos.

Demonstração de CRUD e conceito de Sistema Distribuído através de comunicação através de APIs.

Usuários do sistema fazem relatos sobre incêndios.

## Existem dois usuários:
* [ user - password ]
* admin - admin -> Pode deletar e editar todos os relatos.
* user - user -> Pode editar e deletar somente seus proprios relatos.

Todos os usuários podem postar relatos.

### Front end utiliza Axios para fazer requests sobre o servidor back end que disponibiliza APIs do tipo REST para poder manipular os dados.
### Possui Sistema de Autenticação de usuário por Login de Usuário com Token do tipo JWT 
### Sistema de Autorização através do uso de Spring Security com UserDetails + Authorities.
