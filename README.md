# Project BinaryBrains

Repository for team collaboration on Project BinaryBrains.

## Quick Start

### Prerequisites
- Node.js v18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend runs at `http://localhost:5173`

3. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Backend runs at `http://localhost:5000`

## Project Structure

```
├── frontend/              # React frontend application
│   ├── public/           # Static assets
│   ├── src/              # Source files
│   │   ├── assets/       # Images, fonts, etc.
│   │   └── components/   # React components
│   └── package.json
│
├── backend/              # Node.js backend server
│   ├── src/
│   │   ├── config/       # Configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Data models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utilities
│   │   └── server.js     # Entry point
│   └── package.json
│
├── .editorconfig         # Editor configuration
├── .gitignore           # Git ignore rules
├── CONTRIBUTING.md      # Contribution guidelines
├── LICENSE              # MIT License
└── README.md           # This file
```

## Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Router
- Vite (build tool)

### Backend
- Node.js
- JavaScript (ES Modules)
- Express (to be added)

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start with nodemon (hot reload)
- `npm start` - Start production server

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## Team

This project is maintained by the development team. For questions or support, please open an issue.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

