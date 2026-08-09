<div align="center">

# 🏠 Smart Home Dashboard

**Dashboard residencial com monitor de dispositivos IoT, sensores e gráficos de consumo.**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.x-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org)
[![MQTT](https://img.shields.io/badge/MQTT-3.1.1-660066?style=for-the-badge&logo=mqtt&logoColor=white)](https://mqtt.org)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io)

![License](https://img.shields.io/badge/licença-MIT-green)

</div>

---

## 📖 Sobre o Projeto

O **Smart Home Dashboard** é uma aplicação web moderna para monitorar sua casa inteligente em tempo real. Ele consome dados de sensores e dispositivos IoT (temperatura, umidade, energia, presença) via **MQTT** e entrega atualizações instantâneas para o frontend através de **WebSockets (Socket.io)**, com visualização de dados em gráficos interativos **Chart.js**.

> 🚧 **Status:** Projeto em fase inicial (scaffold). A arquitetura está preparada para receber o backend Node.js e a integração com brokers MQTT.

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 📊 **Monitoramento em tempo real** | Atualização instantânea de sensores via WebSocket |
| 🌡️ **Sensores de ambiente** | Temperatura, umidade e qualidade do ar |
| ⚡ **Consumo de energia** | Gráficos de consumo diário, semanal e mensal |
| 💡 **Dispositivos IoT** | Controle e status de luzes, tomadas e eletrodomésticos |
| 📈 **Gráficos interativos** | Visualização de dados históricos com Chart.js |
| 🚨 **Alertas** | Notificações de anomalias e limites ultrapassados *(roadmap)* |

## 🛠️ Stack de Tecnologias

| Camada | Tecnologia |
|---|---|
| **Frontend** | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| **Gráficos** | [Chart.js 4](https://www.chartjs.org) |
| **Tempo real** | [Socket.io Client](https://socket.io) |
| **Mensageria (IoT)** | [MQTT](https://mqtt.org) — integração planejada no backend |
| **Backend** *(roadmap)* | Node.js + Express + Socket.io Server |

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org) **20.x** ou superior
- npm (incluso com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Fellipeg7/smart-home-dashboard.git
cd smart-home-dashboard

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no seu navegador.

### Build de produção

```bash
npm run build     # gera os arquivos otimizados em /dist
npm run preview   # serve o build localmente para testes
```

## 📁 Estrutura do Projeto

```
smart-home-dashboard/
├── public/
│   └── index.html          # HTML base da aplicação
├── src/
│   ├── components/
│   │   └── Dashboard.jsx   # Componente principal do painel (gráficos)
│   ├── App.jsx             # Layout raiz da aplicação
│   └── main.jsx            # Ponto de entrada (a criar)
├── .gitignore
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
└── README.md
```

## 🗺️ Roadmap

- [x] Scaffold do projeto com Vite + React
- [x] Layout base do dashboard
- [x] Placeholder de gráficos com Chart.js
- [ ] Backend Node.js com Socket.io Server
- [ ] Integração com broker MQTT (Mosquitto / HiveMQ)
- [ ] Página de dispositivos (controle de luzes e tomadas)
- [ ] Histórico de consumo com persistência (SQLite/PostgreSQL)
- [ ] Sistema de alertas e notificações
- [ ] Autenticação de usuários
- [ ] Dark mode e temas customizáveis
- [ ] Deploy automatizado (Docker + GitHub Actions)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

1. Faça um *fork* do projeto
2. Crie uma *branch* para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça o *commit* das alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Envie para o repositório (`git push origin feature/nova-funcionalidade`)
5. Abra um *Pull Request*

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações.

---

<div align="center">
  Feito com ❤️ para o futuro da automação residencial
</div>
