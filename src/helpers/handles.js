import { items } from "./items";

export const handleStop = (game, setGame, control, setControl, count) => {
    if (!game.col1.selected) {
        setGame({
            ...game,
            col1: {
                prev: count === 0 ? items[10] : items[count - 1],
                item: items[count],
                next: count === 10 ? items[0] : items[count + 1],
                selected: true,
                move: false,
            },
        });
        setControl({
            ...control,
            stop: !control.stop,
        })

        return;
    }

    if (!game.col2.selected) {
        setGame({
            ...game,
            col2: {
                prev: count === 0 ? items[10] : items[count - 1],
                item: items[count],
                next: count === 10 ? items[0] : items[count + 1],
                selected: true,
                move: false,
            },
        });
        setControl({
            ...control,
            stop: !control.stop,

        })

        return;
    }
    if (!game.col3.selected) {
        setGame({
            ...game,
            col3: {
                prev: count === 0 ? items[10] : items[count - 1],
                item: items[count],
                next: count === 10 ? items[0] : items[count + 1],
                selected: true,
                move: false,
            },
        });
        setControl({
            ...control,
            stop: !control.stop,
            play: false,
        })


        return;
    }
    setControl({
        ...control,
        stop: !control.stop,
        play: false,
    })
};


export const handlePlay = (setControl, control, setGame, game) => {
    setControl({
        ...control,
        play: true,
    });
    setGame({
        ...game,
        col1: {
            move: true,
        },
        col2: {
            move: true,
        },
        col3: {
            move: true,
        },
    });
};