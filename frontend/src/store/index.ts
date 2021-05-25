import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import axios from "axios";
import { Todo } from "./models/Todo";
import { GetResponse } from "./models/GetResponse";
import { PostRequest } from "./models/PostRequest";

export type FilterType = "ALL" | "COMPLETED" | "INCOMPLETED";

export type State = {
  todos: Todo[];
  filterType: FilterType;
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = (): any => {
  return baseUseStore(key);
};

export default createStore<State>({
  state: {
    todos: [],
    filterType: "ALL",
  },
  getters: {
    /**
     * 全てのTodoを取得する。
     *
     * @param store ストア
     * @returns 全てのTodo
     */
    getAllTodos: (store) => {
      return store.todos;
    },
    /**
     * 完了済のTodoを取得する。
     *
     * @param store ストア
     * @returns 完了済のTodo
     */
    getCompletedTodos: (store) => {
      return store.todos.filter((todo) => todo.completed);
    },
    /**
     * 未完了のTodoを取得する。
     *
     * @param store ストア
     * @returns 未完了のTodo
     */
    getIncompletedTodos: (store) => {
      return store.todos.filter((todo) => !todo.completed);
    },
  },
  mutations: {
    /**
     * filterTypeを設定する。
     *
     * @param state 状態
     * @param payload filterType
     */
    setFilterType(state, payload) {
      state.filterType = payload.filterType;
    },
    /**
     * Todoを設定する。
     *
     * @param state 状態
     * @param payload 追加対象のTodo
     */
    setTodoList(state, payload) {
      state.todos = payload.todos;
    },
    /**
     * 特定のTodoを削除する。
     *
     * @param state 状態
     * @param payload 削除対象のTodoId
     */
    removeTodo(state, payload) {
      state.todos = state.todos.filter((n) => n.id !== payload.removedTodoId);
    },
  },
  actions: {
    /**
     * ToDoの取得API呼び出し。
     */
    async getTodoList(context) {
      const todos: GetResponse = await axios
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
     * ToDoの追加API呼び出し。
     */
    async addTodo(context, reqBody: PostRequest) {
      await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/api/todos`,
        reqBody
      );
    },
    /**
     * ToDoの削除API呼び出し
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
