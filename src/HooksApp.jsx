import { FetchApp } from "./components/FetchApp"
import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <hr />
        <CounterApp />
        <hr />
        <FetchApp />
        <hr />
        <FormsApp />
    </>
    )
}
