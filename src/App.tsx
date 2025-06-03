import { Fragment } from "react/jsx-runtime";

export function App() {

  /**
   * Uso de fragmentos React para agrupar elementos sem adicionar nós extras ao DOM.
   * Isso é útil para retornar múltiplos elementos sem envolver tudo em um único elemento pai. 
   */  
  return (
    <>
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
      </header>
    </>
  );

  /**
   * Outramenta meneira mais verbosa de utilizar fragmentos React.
   */
  return (
    <Fragment>
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
      </header>
    </Fragment>
  );

  /**
   * Uso convencional do retorno de um componente React.
   * Aqui, estamos retornando um JSX que representa a estrutura da aplicação.
   */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
      </header>
    </div>
  );
}
