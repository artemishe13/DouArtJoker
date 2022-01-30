function pk(pkt) {
    let ys = 0;
    let pkA = [];
    while (pkt > 0) { pkA.unshift(pkt % 10); pkt = pkt / 10 | 0; }
    if (pkA.length === 8) {
        let nn = 0;
        let pair = [];
        for (let i = 0; i < pkA.length; i++) {
            nn += 1;
            pair[i] = pkA[i] * 10 + pkA[nn];
        }
        pair.splice(-1, 1);
        let iValue = 0;
        let first = 0;
        for (let v = 0; v < pkA.length - 1; v++) {
            if (pair[v] >= 10) { iValue = (pair[v] - pair[v] % 10) / 10 % 2; }
            if (pair[v] < 10) iValue = pair[v] % 2;
            let Value = pair[v] % 2;
            if (iValue != 0 && Value != 0) {
                first = first * 10 + v + 1;
                v += 2;
            }
        }
        let second = 0;
        let second2 = 0;
        let iValue1 = 0;
        let iValue2 = 0;
        let pairArr = [14, 15, 16, 17, 25, 26, 27, 36, 37, 47, 147];
        if (pairArr.indexOf(first) !== -1) {
            ys = 1000;
            for (let v = 0; v < pkA.length - 1; v++) {
                iValue = (pair[v] - pair[v] % 10) / 10 % 2;
                iValue1 = (pair[v] - pair[v] % 10) / 10;
                iValue2 = pair[v] % 10;
                Value = pair[v] % 2;
                if (iValue != 0 && Value != 0 && pair[v] > 10) { second = second * 10 + v + 1; }

                if (iValue != 0 && Value != 0 && pair[v] > 10 && iValue1 < iValue2) {
                    second2 = second2 * 10 + v + 1;
                }
            }
            if (second === second2) {
                ys = 2000;
            } else {
                ys = 1000;
            }
        }
        let ysArr = [1000, 2000, 100];
        if (ysArr.indexOf(ys) !== -1) {
            return ys;
        } else {
            let noteven = 0;
            let even = 0;
            for (let v = 0; v < pkA.length; v++) {
                if (pkA[v] != 0) {
                    iValue = pkA[v] % 2;
                    if (iValue === 0) {
                        even = even + pkA[v];
                    } else {
                        noteven = noteven + pkA[v];
                    }
                }
            }
            if (even > noteven) {
                return 100;
            } else {
                return 0;
            }
        }
    } else {
        return 0;
    }
}