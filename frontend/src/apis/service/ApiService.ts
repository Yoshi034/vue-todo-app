import axios from "axios";
import { PostReq, PutReq, Res } from "../models/ApiModels";

export default class ApiService {
  /**
   * ToDoの取得
   * @returns API結果
   */
  getToDoList(): Promise<Res[]> {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/todos`);
  }

  /**
   * ToDoの追加
   * @returns API結果
   */
  addToDo(reqBody: PostReq): Promise<Res> {
    return axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/todos`, reqBody);
  }

  /**
   * ToDoの更新
   * @returns API結果
   */
  updateToDo(todoId: string, reqBody: PutReq): Promise<Res> {
    return axios.put(
      `${process.env.VUE_APP_API_BASE_URL}/api/todos${todoId}`,
      reqBody
    );
  }
}
