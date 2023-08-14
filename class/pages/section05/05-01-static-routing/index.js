import { useRouter } from "next/router"

export default function StaticRouringPage(){
  const router = useRouter()

  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved")
  }

  return <button onClick={onClickMove}>page movedw</button>

}