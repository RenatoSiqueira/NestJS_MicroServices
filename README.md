# Jurema Test - NestJS

## Questao 1
```
cd jurema-estados
yarn start:dev

Acessar: http://localhost:3000/estados/v1
```

## Questão 2
```
cd jurema-populacao
yarn start:dev

Acessar: http://localhost:3000/populacao/{UF}
Exemplo: http://localhost:3000/populacao/sp
```

## Questão 3 - MicroServices
Terminal 1: 
```
cd jurema-estados
yarn start:dev
```

Terminal 2: 
```
cd jurema-populacao
yarn start:dev
```

Web:
```
Acessar: http://localhost:3000/estados/v2
```

---

# Jurema Test - NodeJS - Sem Filas
- Serviço Estados (on port 3001)
- Serviço Populacao (on port 3002)

## Start Server
```
cd jurema-node
yarn start
```

## Questão 1
```
Acessar: http://localhost:3001/estados/v1
```

## Questão 2
```
Acessar: http://localhost:3002/populacao/{UF}
Exemplo: http://localhost:3002/populacao/sp
```

## Questão 3
```
Acessar: http://localhost:3001/estados/v2
```