 import { useState } from "react"
 import './tabs.css'

function Tabs() {

    const [conteudoAba, setConteudoaba] = useState([
        {
            title: 'Lavagens',
            content: (
                <table>

                </table>
            ),
            isOpen: false
        },
        {
            title: 'Estética Automotiva',
            content: (
                <table>

                </table>
            ),
            isOpen: false
        }
    ])
    const toggleTab = (props) => {
        const novoConteudoAba = [...conteudoAba]
        novoConteudoAba[props].isOpen = !novoConteudoAba[props].isOpen
        setConteudoaba(novoConteudoAba)
    }

    return (
        <div className="tab-container">
          {conteudoAba.map((aba, props) => (
            <div key={props} className={`aba ${aba.isOpen ? 'active' : ''}`}>
              <div className="tab-header" />
              
              <div className="tab-title-and-icon" onClick={() => toggleTab(props)}>
                <div className="tab-title">{aba.title}</div>
                <button>{aba.isOpen ? '-' : '+'}</button>
              </div>
              
              {aba.isOpen && <div className="tab-content">{aba.content}</div>}
            </div>
          ))}
        </div>
      )
      
}
export default Tabs