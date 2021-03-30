import React, { useEffect, useRef, useState } from 'react'
import panel from '../../assets/img/panel.png'
import minimize from '../../assets/icons/minimize.png'
import maximize from '../../assets/icons/maximize.png'
import {StyledPanel,HiddenButton,MinimizeButton,MaximizeButton} from './styles'


let dashboardStatus = "display"
let divWrapperSize:number = 0;
let count: NodeJS.Timeout

export default () => {

    const boxWrapper = useRef<HTMLDivElement>(null)
    const boxContent = useRef<HTMLDivElement>(null)
    const button = useRef<HTMLButtonElement>(null)

    const [widthWrapper, setwidthWrapper] = useState(220)
    const [Actived, setActived] = useState(false)
    const setPanelState = () => {
        if(dashboardStatus == "display"){
            var elem = document.getElementById("panel")
            if (elem) {
                divWrapperSize = elem.offsetWidth
                setwidthWrapper(elem.offsetWidth)
            }
        }
        setActived(true)
    }

    const changeState = () => {
        if (dashboardStatus === "hide") dashboardStatus = "display"
        else dashboardStatus = "hide"
        setActived(false)
    }

    const resetButton = () => {
        dashboardStatus = "hide"
        setwidthWrapper(0)
        divWrapperSize = 50
        if (boxWrapper.current) {
            boxWrapper.current.setAttribute("style", "display:flex !important; width:0px")

        }
        if (button.current) {
            button.current.setAttribute("style", 'display:none')
        }

        if (boxContent.current) {
            boxContent.current.setAttribute("style", "visibility: hidden")
        }
        count = setTimeout(() => {
            setPanelState()
        }, 200)

    }

    useEffect(() => {
        if (Actived && dashboardStatus === "display") {

            count = setTimeout(() => {
                setwidthWrapper(widthWrapper - 22)
            }, 50)

            if (boxWrapper.current) {
                boxWrapper.current.style.width = widthWrapper + 'px'
            }
            if (boxContent.current) {
                boxContent.current.style.visibility = 'hidden'
            }
        }

        if (Actived && widthWrapper > 0 && dashboardStatus === "display") {

            count = setTimeout(() => {
                setwidthWrapper(widthWrapper - 22)
            }, 50)

            if (boxWrapper.current) {
                boxWrapper.current.style.width = widthWrapper + 'px'
            }
          
        }

        else if (Actived && widthWrapper <= 0 && dashboardStatus === "display") {
            if (boxWrapper.current) {
                boxWrapper.current.style.width = 0 + 'px'
                setwidthWrapper(0)
            }
            changeState()
        }

        else if (Actived && widthWrapper <= 0 && dashboardStatus === "hide") {

            count = setTimeout(() => {
                setwidthWrapper(widthWrapper + 22)
            }, 20)

            if (boxWrapper.current) {
                boxWrapper.current.style.visibility = 'visible'
                boxWrapper.current.style.width = widthWrapper + 'px'

            }
        }

        else if (Actived && widthWrapper < divWrapperSize && dashboardStatus === "hide") {
            count = setTimeout(() => {
                setwidthWrapper(widthWrapper + 22)
            }, 20)

            if (boxWrapper.current) {
                boxWrapper.current.style.width = widthWrapper + 'px'
            }
        }

        else if (Actived && widthWrapper >= divWrapperSize && dashboardStatus === "hide") {

            if (boxWrapper.current) {
                boxWrapper.current.style.width = divWrapperSize + 'px'
            }
            if (boxContent.current) {
                boxContent.current.style.visibility = 'visible'

            }
            changeState()
        }

    }, [Actived, widthWrapper])

    return (
        <>
            <HiddenButton ref={button} onClick={resetButton}>
                <img src={maximize} alt="" />
            </HiddenButton>

            <StyledPanel ref={boxWrapper} id="panel" className="controlPanel">

                <div ref={boxContent}>
                    <img src={panel} alt="painel1" />
                    <p>Painel de Controle</p>
                </div>

                {dashboardStatus === "display" ?
                    <MinimizeButton onClick={setPanelState}>
                        <img src={minimize} alt="" />
                    </MinimizeButton> : ""}

                {dashboardStatus === "hide" ?
                    <MaximizeButton onClick={setPanelState}>
                        <img src={maximize} alt="" />
                    </MaximizeButton> : ""}

            </StyledPanel>
        </>
    )
}