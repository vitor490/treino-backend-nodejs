import UserModel from '../models/userModel.js'

export const listAllUsers = (req, res) => {
  UserModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const showUser = (req, res) => {
  const id = req.params.id

  UserModel.showUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createUser = (req, res) => {
  const User = req.body
  //TODO Verificar se os dados são válidos
  UserModel.createUser(User, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Cadastrado!" })
  })
}

export const deleteUser = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  UserModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "User Deletado com Sucesso!" })
  })
}

export const deleteIdUser = (req, res) => {
  const { id, slug } = req.params
  console.log(slug)
  //TODO Verificar se os dados são válidos
  UserModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "User Deletado com Sucesso!" })
  })
}

export const updateUser = (req, res) => {
  const User = req.body

  const varteste = req.query
  console.log(varteste)

  //TODO Verificar se os dados são válidos
  UserModel.updateUser(User, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "User Atualizado!" })
  })
}