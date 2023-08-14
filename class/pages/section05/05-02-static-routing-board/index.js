import { useRouter } from "next/router"

export default function StaticRouringPage(){
  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/section05/05-02-static-routing-board-moved/1")
  }
  const onClickMove2 = () => {
    router.push("/section05/05-02-static-routing-board-moved/2")
  }
  const onClickMove3 = () => {
    router.push("/section05/05-02-static-routing-board-moved/3")
  }

  return (
      <>
        <button onClick={onClickMove1}>1page moved</button>
        <button onClick={onClickMove2}>2page moved</button>
        <button onClick={onClickMove3}>3page moved</button>
      </>
    )

}