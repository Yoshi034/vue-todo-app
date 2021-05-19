import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import axios from "axios";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
};

export type Res = {
  id: number;
  text: string;
  completed: boolean;
};

export type PostReq = {
  text: string;
};

export type PutReq = {
  todoId: string;
  body: { completed: boolean };
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    todos: [],
  },
  mutations: {
    setTodoList(state, payload) {
      state.todos = payload.todos;
    },
    removeTodo(state, payload) {
      state.todos = state.todos.filter((n) => n.id !== payload.removedTodoId);
    },
  },
  actions: {
    /**
     * ToDoの取得
     * @returns API結果
     */
    async getTodoList(context) {
      const todos: Res[] = await axios
        .get(`${process.env.VUE_APP_API_BASE_URL}/api/todos`)
        .then((res) => {
          return res.data;
        });
      const payload = {
        todos: todos,
      };
      context.commit("setTodoList", payload);
    },
    /**
     * ToDoの追加
     * @returns API結果
     */
    async addTodo(context, reqBody: PostReq) {
      await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/api/todos`,
        reqBody
      );
    },
    /**
     * ToDoの削除
     * @returns API結果
     */
    async deleteTodo(context, todoId: number) {
      await axios.delete(
        `${process.env.VUE_APP_API_BASE_URL}/api/todos/${todoId}`
      );
      const payload = {
        removedTodoId: todoId,
      };
      context.commit("removeTodo", payload);
    },
  },
  modules: {},
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = (): any => {
  return baseUseStore(key);
};
