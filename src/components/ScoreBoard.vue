<template>
    <div class="trivia-scoreboard">

<!-- TODO: make player-stats component to avoid all of this repetition -->
        <div v-if="user" class="player myself">
            <div class="username animated fadeIn">
                <h3>{{user.username}}</h3>
            </div>
            <div class="avatar-and-score myself">
                <div class="player-img">
                    <img :src="user.avatar" alt="user avatar">
                </div>
                <div class="live-score animated fadeIn">
                    <h2>
                        <span class="total-score">{{userPtsToDisplay}}</span>
                        <transition enter-active-class="animated flash"
                                    leave-active-class="animated fadeOut">
                            <span v-if="userRoundPts" class="round-score">  +{{userRoundPts}}</span>
                        </transition>
                    </h2>
                </div>
            </div>
        </div>

        <div class="player rival">
            <div class="username animated fadeIn">
                <h3 v-if="rival">{{rival.username}}</h3>
                <!-- <h3 v-else-if="waitingForRival">Waiting for opponent</h3>
                <h3 v-else>No opponent</h3> -->
            </div>
            <div class="avatar-and-score rival">
                <div class="live-score animated fadeIn">
                    <h2 v-if="rival">
                        <transition enter-active-class="animated flash"
                                    leave-active-class="animated fadeOut">
                            <span v-if="rivalRoundPts" class="round-score">{{rivalRoundPts}}+  </span>
                        </transition>
                        <span class="total-score">{{rivalPtsToDisplay}}</span>
                    </h2>
                </div>
                <div class="player-img">
                    <img v-if="rival" :src="rival.avatar" alt="rival avatar">
                </div>
            </div>
        </div>

    </div>
</template> 

<script>
//********** all of this needs a do over. Big jif *************/

import { mapGetters } from 'vuex'

export default {
    props: ['user', 'rival', 'waitingForRival', 'currRound', 'nextRound'],
    computed: {
        ...mapGetters([
            'totalPts'
        ])
    },
    data() {
        return {
            userRoundPts: null,
            rivalRoundPts: null,
            userRoundPtsShown: false,
            rivalRoundPtsShown: false,
            userPtsToDisplay: 0,
            rivalPtsToDisplay: 0
        }
    },
    watch: {
        currRound() {
            if (!this.userRoundPtsShown && this.currRound.userPts) {
                this.userRoundPtsShown = true
                this.userRoundPts = this.currRound.userPts
                this.incScore('userPtsToDisplay', this.currRound.userPts)
                setTimeout(_=> this.userRoundPts = null, 2000)
            }
            if (!this.rivalRoundPtsShown && this.currRound.rivalPts) {
                this.rivalRoundPtsShown = true
                this.rivalRoundPts = this.currRound.rivalPts
                this.incScore('rivalPtsToDisplay', this.currRound.rivalPts)
                setTimeout(_=> this.rivalRoundPts = null, 2000)
            }
        },
        nextRound() {
            this.userRoundPtsShown = false
            this.rivalRoundPtsShown = false
        }
    },
    methods: {
        incScore(toInc, incBy) {
            var interval = setInterval(_=> {
                this[toInc]++
                if (--incBy === 0) clearInterval(interval)
            }, 10)
        }
    }
}
</script>

<style lang="scss">
.trivia-scoreboard {
    display: flex;
    justify-content: space-between;
    margin: 10px 1rem;
    .player {
        font-size: 1.3em;
        display: flex;
        flex-direction: column;
        &.rival {
            color: var(--rival-color);
            align-items: flex-end;
        }
        &.myself {
            color: var(--player-color);
            align-items: flex-start;
        }
        .player-img {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            border: 3px solid;
            overflow: hidden;
            img {
                max-height: 100%;
                width: auto;
                max-width: none;
            }
        }
        // div:not(:last-child) {
        //     margin-right: .5rem;
        // }
        h2, h3 {
            font-weight: 500;
        }
        .live-score {
            // color: var(--theme-color);
            align-self: flex-end;
        }
        .round-score {
            font-size: 85%;
        }
        .total-score {
            font-size: 1.6em;
        }

    }
}

.avatar-and-score {
    display: flex;
    &.rival {
        justify-content: flex-end;
    }
    div:not(:last-child) {
        margin-right: .5rem;
    }
}

</style>
