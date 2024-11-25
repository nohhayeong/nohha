import express, { Request, Response } from 'express'

const app = express()
const PORT = 3000

// 기본 라우트 설정
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! This is TypeScript!')
})

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
