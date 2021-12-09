import './App.css'
import { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ChartContainer from './ChartContainer';


function App() {

  const [multiplier, setMultiplier] = useState(1)
  const [multiplierDecimals, setMultiplierDecimals] = useState(0)

  const [isExploded, setIsExploded] = useState(false)
  const [isRetired, setIsRetired] = useState(false)
  const [isPlacedBet, setIsPlacedBet] = useState(false)

  const [credits, setCredits] = useState(10000)
  const [form, setForm] = useState({
    bet: ''
  })
  const { bet } = form

  const [winnerNumber, setWinnerNumber] = useState(((Math.random() * (19.99 - 1) + 1).toFixed(2) * 1).toString())
  const [secondsRestart, setSecondsRestart] = useState(5)
  var secondsRestartVar = secondsRestart

  const [isTimerRender, setIsTimerRender] = useState(false)
  const [lastMultipliers, setLastMultipliers] = useState([])
  const [lastBets, setLastBets] = useState([])
  const [cashout, setCashout] = useState('')
  const startMultiplier = () => {
    setMultiplierDecimals(multiplierDecimals + 1)
    if (multiplierDecimals > 99) {
      setMultiplier(multiplier + 1)
      setMultiplierDecimals(0)
    }
  }



  useEffect(() => {
    const interval = setInterval(startMultiplier);
    const number = `${multiplier}.${multiplierDecimals}`
    setIsExploded(false)
    if (Number(winnerNumber).toFixed(1) === Number(number).toFixed(1)) {
      setLastMultipliers([winnerNumber, ...lastMultipliers])
      setIsExploded(true)
      setTimeout(() => {
        setIsTimerRender(true)
        const intervalRestart = setInterval(() => {
          secondsRestartVar--
          setSecondsRestart(secondsRestartVar)
          if (secondsRestartVar === 0) {
            clearInterval(intervalRestart)
            setWinnerNumber(((Math.random() * (19.99 - 1) + 1).toFixed(2) * 1).toString())
            setIsTimerRender(false)
            setMultiplier(1)
            setMultiplierDecimals(0)
            setSecondsRestart(5)
          }
        }, 1000);
      }, 2000);
      clearInterval(interval)
    }

    return () => clearInterval(interval);

  }, [multiplierDecimals])

  useEffect(() => {
    const profit = bet * cashout
    console.log('profit', profit)
    let betObj = {}
    if (isExploded && isPlacedBet && !isRetired) {
      betObj.profit = bet
      betObj.betProp = bet
      betObj.lost = true
      setLastBets([betObj, ...lastBets])
      setIsPlacedBet(false)
      setCashout('')
    }
    if (isExploded && isPlacedBet && isRetired) {
      betObj.profit = profit.toFixed(2)
      betObj.betProp = bet
      betObj.lost = false
      setLastBets([betObj, ...lastBets])
      setCredits(credits + profit)
      setIsRetired(false)
      setIsPlacedBet(false)
      setCashout('')
    }

  }, [isExploded, isRetired, cashout])


  const handleRetire = () => {
    if (isExploded || !bet) return
    const number = `${multiplier}.${multiplierDecimals}`
    console.log(number)
    setCashout(number)
    setIsRetired(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!isExploded || !bet) return
    setCredits(credits - bet)
    setIsPlacedBet(true)
  }

  return (
    <>
      <Header credits={credits} />
      <div className="multiplier">
        {
          isTimerRender
            ? <h1>{secondsRestart}</h1>
            : <h1>{multiplier}.{multiplierDecimals}X</h1>
        }
      </div>
      <ChartContainer multiplier={multiplier} />
      <Sidebar bet={bet} handleChange={handleChange} handleSubmit={handleSubmit} handleRetire={handleRetire} isPlacedBet={isPlacedBet} lastBets={lastBets} />
      <Footer lastMultipliers={lastMultipliers} />
    </>

  )
}

export default App;
