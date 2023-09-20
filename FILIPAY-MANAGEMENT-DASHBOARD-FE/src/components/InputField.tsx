import '../styles/index.css'

interface PropsElement {
    id: string;
    status: string;
    name: string;
    type: string;
    title: string;
    value: string;
    defaultValue: string;
    statusMessage: string;
    isRequired: boolean;
    placeHolder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }


export default function InputFieldNormal(props : PropsElement) : JSX.Element{

    return(
    <>
      <label htmlFor ={props.id} className="font-sans text-black" style ={{marginBottom: '8px'}}>{props.title}</label>
      <input id = {props.id}className="w-full px-3 py-3.75 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-base" type= {props.type} placeholder = {props.placeHolder} />
    </>)

}