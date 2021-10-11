import { LitElement, html } from 'lit-element';
  const author = 'open-wc';
  const homepage = 'https://open-wc.org/';
  const footerTemplate = html`
    <footer>Made with love by <a href="${homepage}">${author}</a></footer>
  `;

  class TodoApp extends LitElement {
    static get properties() {
      return {
        todos: { type: Array },
      };
    }



    constructor() {
      super();
      this.todos = [
        { text: 'Do A', finished: true },
        { text: 'Do B', finished: false },
        { text: 'Do C', finished: false },
      ];
    }

    render() {
      const finishedCount = this.todos.filter(e => e.finished).length;
      const unfinishedCount = this.todos.length - finishedCount;

      return html`
      <style>
        :host {
            color: blue;
            border: white 5px outset;
                        background-color: rgb(227, 228, 228);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap:wrap;
                    margin:0;
                    padding:0;
                    width:200px;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        button {
            background-color: transparent;
            border: none;
        }
      </style>
        <h1>Todo app</h1>

        <input id="addTodoInput" placeholder="Name" />
        <button @click=${this._addTodo}>Add</button>

        <ol>
          ${this.todos.map(
            todo => html`
              <li>
                <input
                  type="checkbox"
                  .checked=${todo.finished}
                  @change=${e => this._changeTodoFinished(e, todo)}
                />
                ${todo.text}
                <button @click=${() => this._removeTodo(todo)}>X</button>
              </li>
            `,
          )}
        </ol>

        <div>Total finished: ${finishedCount}</div>
        <div>Total unfinished: ${unfinishedCount}</div>

        ${footerTemplate}
      `;
    }

    _addTodo() {
      const input = this.shadowRoot.getElementById('addTodoInput');
      const text = input.value;
      input.value = '';

      this.todos = [...this.todos, { text, finished: false }];
    }

    _removeTodo(todo) {
      this.todos = this.todos.filter(e => e !== todo);
    }

    _changeTodoFinished(e, changedTodo) {
      const finished = e.target.checked;

      this.todos = this.todos.map(todo => {
        if (todo !== changedTodo) {
          return todo;
        }
        return { ...changedTodo, finished };
      });
    }
  }

  customElements.define('todo-app', TodoApp);