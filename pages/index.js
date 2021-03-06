import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/action/counterActions';

const Home = ({incrementCounter,decrementCounter,counter}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
      <h1>Simple Counter App</h1>
      <button onClick={() =>incrementCounter()}>Increment</button>
                <button onClick={()=>decrementCounter()}>Decrement</button>
                <h2>{counter}</h2>
    </div>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

