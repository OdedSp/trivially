<template>
<div class="stats">
    <div class="c100 small player" :class="'p'+(questReport.userPts)">
        <span>{{questReport.userPts}}p</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>

    <div class="c100 small player"
    :class="questReport.answerTime? 'p'+(10-questReport.answerTime)*10 : 'p0'">
        <span v-if="questReport.answerTime">{{questReport.answerTime}}s </span>
        <span v-else>n/a</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>

    <div class="c100 small correct" :class="'p'+(questReport.percentage)">
        <span>{{questReport.percentage}}%</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>

    <div class="c100 small rival" :class="'p'+(questReport.rivalPts)">
        <span>{{questReport.rivalPts}}p</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    props: ['questReport']

}
</script>

<style scoped lang="scss">
// @import '../assets/circle.css';

.stats {
    margin: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 85%;
}

.c100 {
    background-color: #464646;
    // background-color: var(--answer-color);
    &.small {
        font-size: 50px;
    }
    &::after {
        background-color: var(--main-bg-color);
        // background-color: var(--answer-color);
    }
    > span {
        font-size: 0.25em;
        width: 4em;
        line-height: 4em;
        color: #7fa2ad;
    }
    &.rival {
        .slice .bar, .slice .fill {
            border-color: var(--rival-color);
        }
        &:hover > span {
            color: var(--rival-color);
        }
    }
    &.player {
        .slice .bar, .slice .fill {
            border-color: var(--player-color);
        }
        &:hover > span {
            color: var(--player-color);
        }
    }
    &.correct {
        .slice .bar, .slice .fill {
            border-color: var(--correct-color);
        }
        &:hover > span {
            color: var(--correct-color);
        }
    }
    &:hover > span {
        font-size: .35em;
        width: 2.9em;
        line-height: 2.9em;
        font-weight: 600;
    }
}

// .circle {
//     display: flex;
//     flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   border: 1px solid white;
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
//   position: relative;
//   overflow: hidden;
//   text-transform: uppercase;
//   font-size: 14px;
//   margin: 5px;
// }

// .percentage {
//   background: gray;
//   display: flex;
//   flex-flow: column wrap;
//   .background {
//     width: 100px;
//     align-self: flex-end;
//     background: var(--correct-color);
//     position: relative;
//     bottom: 0;
//   }
//   .noPercentage {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     align-items: center;
//     justify-content: center;
//     background: var(--incorrect-color)
//   }
// }

// .time {
//     background: var(--theme-color);
// }

// .userPts{
//     background: var(--player-color)
// }

// .rivalPts{
//     background: var(--rival-color)
// }
</style>
