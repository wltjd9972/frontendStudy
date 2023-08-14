import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ 
    createProduct(seller: $seller, createProductInput: $createProductInput){ 
      _id
      number
      message
    }
  }
`

export default function Graphql () {
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSummit = async () =>{
    const result =  await createProduct({
      $: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "good mouse",
          price: 2000
        }
      }
    }
    )
  }

  //한줄일 때 ()필요 없음
  return <button onClick={onClickSummit}>GRPAHQL-API-REQUESTING</button>

  
}