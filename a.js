const A = S;
(function(p, T) {
    const W = S
      , Q = p();
    while (!![]) {
        try {
            const s = parseInt(W(0x145)) / 0x1 + -parseInt(W(0x198)) / 0x2 + -parseInt(W(0x18f)) / 0x3 * (-parseInt(W(0x233)) / 0x4) + -parseInt(W(0x1f1)) / 0x5 + -parseInt(W(0x215)) / 0x6 * (parseInt(W(0x15b)) / 0x7) + parseInt(W(0x12d)) / 0x8 * (-parseInt(W(0x24f)) / 0x9) + parseInt(W(0x24b)) / 0xa * (parseInt(W(0x259)) / 0xb);
            if (s === T)
                break;
            else
                Q['push'](Q['shift']());
        } catch (K) {
            Q['push'](Q['shift']());
        }
    }
}(y, 0x1f20f),
window['InkPlayerSrc'] = document[A(0x1ff)]['src']);
function S(p, T) {
    const Q = y();
    return S = function(s, K) {
        s = s - 0x115;
        let C = Q[s];
        return C;
    }
    ,
    S(p, T);
}
class InkPlayer {
    [A(0x147)]() {
        const z = A;
        this[z(0x124)] = !0x1,
        this[z(0x253)] = {},
        this[z(0x1ce)] = {
            '050': {
                'value': 0.5,
                'text': '0.5x'
            },
            '075': {
                'value': 0.75,
                'text': z(0x19d)
            },
            0x64: {
                'value': 0x1,
                'text': '1x'
            },
            0x7d: {
                'value': 1.25,
                'text': '1.25x'
            },
            0x96: {
                'value': 1.5,
                'text': z(0x22f)
            },
            0xaf: {
                'value': 1.75,
                'text': z(0x16f)
            },
            0xc8: {
                'value': 0x2,
                'text': '2x'
            }
        },
        this[z(0x182)] = [0x2d0, 0x1e0, 0xf0, 0x90, z(0x1b3)],
        this[z(0x181)] = !0x1,
        this[z(0x130)] = !0x1,
        this[z(0x225)] = !0x1,
        this[z(0x1c6)] = !0x0,
        this[z(0x1dd)] = !0x1,
        this[z(0x1ad)] = !0x1,
        this[z(0x171)] = 0x0,
        this[z(0x1ab)] = {
            '-1': 'loading',
            0x0: 'loaded',
            0x1: z(0x1a0),
            0x2: 'paused',
            0x3: z(0x153)
        },
        this[z(0x168)] = 1.5,
        this['_padding_top_for_aspect_ratio'] = z(0x1c7),
        this[z(0x176)] = !0x1,
        this[z(0x1c8)] = null,
        this[z(0x1b2)] = 0x5dc;
    }
    constructor(p, T) {
        const F = A;
        this['declar_private_members'](),
        this['_destroy_callback'] = T,
        this[F(0x227)] = p[F(0x1f3)],
        this[F(0x200)] = p['otp'],
        this[F(0x18e)] = p[F(0x1f0)],
        this['_license'] = p[F(0x1f5)],
        this[F(0x1be)] = p[F(0x11e)],
        this[F(0x11f)](p),
        this[F(0x128)](),
        this[F(0x197)]();
        const Q = this;
        return setInterval(function() {
            const Y = F;
            Q[Y(0x128)]();
        }, 0x3e8),
        setInterval(function(s) {
            const k = F;
            Q[k(0x1a8)]() && Q[k(0x13f)]();
        }, 0x1f4),
        setInterval(function() {
            const M = F;
            Q['_is_playing'] && (Q[M(0x171)] += 0.2);
        }, 0xc8),
        window[F(0x1d1)](F(0x170), function(s) {
            const r = F;
            if (s[r(0x216)]) {
                if (r(0x230) === s[r(0x216)][r(0x1fa)]) {
                    const K = window[r(0x1d2)] ? window[r(0x1d2)][r(0x1cf)]['href'] : window['location']['href']
                      , C = {
                        'type': 'parentResponse',
                        'video_id': Q[r(0x227)],
                        'otp': Q[r(0x200)],
                        'api': Q[r(0x18e)],
                        'license': Q[r(0x158)],
                        'init_config': Q[r(0x1be)],
                        'referal_url': K
                    };
                    window[r(0x202)] = s[r(0x1a7)],
                    Q[r(0x239)](C, '*');
                } else
                    r(0x155) === s[r(0x216)][r(0x1fa)] ? Q[r(0x249)](s[r(0x216)]) : r(0x1fc) === s[r(0x216)][r(0x1fa)] && Q[r(0x195)](s[r(0x216)]['data']);
            }
        }),
        this[F(0x1bd)][F(0x1d1)](F(0x1f8), s=>{
            const u = F;
            document[u(0x24c)] ? (this[u(0x225)] = !0x0,
            this[u(0x177)]()) : (this[u(0x225)] = !0x1,
            this[u(0x1bb)]());
        }
        ),
        (s=>({
            'getiFrameID': s[F(0x180)][F(0x210)](s),
            'getStatus': s['getStatus']['bind'](s),
            'getCurrentTime': s[F(0x1f4)][F(0x210)](s),
            'getTotalPlayedTime': s[F(0x1da)]['bind'](s),
            'getMuted': s['getMuted']['bind'](s),
            'getVolume': s[F(0x212)][F(0x210)](s),
            'getIsBuffering': s[F(0x1ac)]['bind'](s),
            'getPlaybackRate': s[F(0x22d)][F(0x210)](s),
            'getIsAdaptive': s['getIsAdaptive'][F(0x210)](s),
            'getStatusText': s[F(0x119)]['bind'](s),
            'getAspectRatio': s[F(0x18b)][F(0x210)](s),
            'getDuration': s[F(0x11a)][F(0x210)](s),
            'mute': s[F(0x22b)][F(0x210)](s),
            'unmute': s[F(0x189)][F(0x210)](s),
            'setVolume': s[F(0x1b5)][F(0x210)](s),
            'pause': s['pause'][F(0x210)](s),
            'play': s['play'][F(0x210)](s),
            'setPlaybackRate': s[F(0x1a3)][F(0x210)](s),
            'setAdaptive': s[F(0x16c)][F(0x210)](s),
            'addEventListener': s[F(0x1d1)][F(0x210)](s),
            'removeEventListener': s[F(0x167)]['bind'](s),
            'setCurrentTime': s['setCurrentTime'][F(0x210)](s)
        }))(Q);
    }
    [A(0x180)]() {
        const d = A;
        return this[d(0x223)];
    }
    [A(0x127)]() {
        return this['_status'];
    }
    [A(0x129)](p) {
        const B = A;
        this[B(0x13a)](p);
    }
    ['mute']() {
        const D = A;
        this[D(0x131)]();
    }
    [A(0x189)]() {
        this['_setToUnmute']();
    }
    [A(0x1b5)](p) {
        const c = A
          , T = p / 0x64;
        this['_setVolume'](T),
        this[c(0x11c)][c(0x139)] = T;
    }
    ['pause']() {
        const U = A;
        this[U(0x136)]();
    }
    [A(0x226)]() {
        this['_setToPlay']();
    }
    ['setPlaybackRate'](p) {
        const e = A;
        !isNaN(p) && this[e(0x182)]['find'](T=>T == p) && this[e(0x23c)](p);
    }
    [A(0x16c)](p) {
        const t = A;
        p ? this[t(0x23c)](t(0x1b3)) : this[t(0x23c)](0x1e0);
    }
    [A(0x1d1)](p, T) {
        this['_events'][p] = T;
    }
    [A(0x167)](p) {
        const X = A;
        delete this[X(0x253)][p];
    }
    [A(0x127)]() {
        return this['_status'];
    }
    [A(0x1f4)]() {
        return this['_currentTime'];
    }
    [A(0x1da)]() {
        const J = A;
        return this[J(0x171)];
    }
    ['getMuted']() {
        const m = A;
        return this[m(0x1c1)];
    }
    [A(0x212)]() {
        const v = A;
        return this[v(0x15e)];
    }
    [A(0x1ac)]() {
        const g = A;
        return this[g(0x1dd)];
    }
    [A(0x22d)]() {
        const f = A;
        return this[f(0x20f)];
    }
    ['getIsAdaptive']() {
        const a = A;
        return this[a(0x1a2)];
    }
    ['getStatusText']() {
        const b = A;
        return this[b(0x1ab)][this['_status']] || void 0x0;
    }
    [A(0x18b)]() {
        const G = A;
        return this[G(0x1dc)];
    }
    [A(0x11a)]() {
        const w = A;
        return this[w(0x19f)];
    }
    [A(0x239)](p, T) {
        const q = A;
        p[q(0x190)] = this['_iframe_name'],
        window[q(0x202)][q(0x157)](p, '*');
    }
    [A(0x13c)](p, T) {
        const L = A;
        this[L(0x124)] && this[L(0x239)](p, T);
    }
    [A(0x195)](p) {
        const o = A
          , T = {
            'currentTime': ()=>this[o(0x187)] = p[o(0x139)],
            'muted': ()=>this['_muted'] = p[o(0x139)],
            'volume': ()=>this[o(0x15e)] = p[o(0x139)],
            'playbackRate': ()=>this['_playbackRate'] = p['value'],
            'isAdaptive': ()=>this[o(0x1a2)] = p[o(0x139)],
            'aspectRatio': ()=>{
                const Z = o;
                this['_aspectRatio'] != p['value'] && (this[Z(0x1dc)] = p[Z(0x139)],
                this['_aspectRatio'] ? this[Z(0x244)](this[Z(0x1dc)]) : this['_setAspectRatio'](this[Z(0x168)]));
            }
            ,
            'duration': ()=>{
                const P = o;
                let Q = this['_container'][P(0x184)]('#inks-current-time')
                  , s = this['_secondsToHHMMSS'](0x0)
                  , K = this[P(0x20a)](p['value']);
                Q[P(0x1f7)] = s + P(0x218) + K + '\x20';
            }
        };
        T[p[o(0x1cc)]] && T[p[o(0x1cc)]]();
    }
    [A(0x244)](p) {
        const l = A
          , T = this['_decimalToAspectRatio'](p);
        this['_padding_top_for_aspect_ratio'] = T[l(0x1ef)] / T[l(0x166)] * 0x64 + '%',
        this[l(0x1bd)][l(0x184)]('#inks-main-container')['style']['paddingTop'] = this[l(0x1a1)];
    }
    [A(0x1c2)](p, T=null) {
        const N = A
          , Q = this[N(0x253)][p];
        N(0x224) == typeof Q && Q(T);
    }
    [A(0x11f)](p) {
        const h = A;
        this[h(0x1bd)] = p[h(0x174)],
        this[h(0x1bd)]['innerHTML'] = '',
        this[h(0x223)] = this[h(0x175)](0x14);
        let T = window[h(0x14e)]['replace'](h(0x201), h(0x246));
        T = T + h(0x21a) + this[h(0x223)];
        const Q = this['_generateIframeHTML'](this[h(0x223)], T);
        this['_container'][h(0x1b1)](h(0x1ba), Q),
        this[h(0x241)] = this[h(0x1bd)][h(0x184)]('#' + this[h(0x223)]),
        this[h(0x1d0)]();
    }
    [A(0x1d0)]() {
        const x = A;
        var p = this
          , T = new MutationObserver(function(Q, s) {
            const E = S;
            if (document['body'][E(0x21d)](p[E(0x241)]))
                ;
            else
                p['_main_iframe'][E(0x118)] = E(0x228),
                p['_main_iframe'][E(0x13e)]['removeChild'](p[E(0x241)]),
                s[E(0x21f)](),
                p[E(0x1ca)](p[E(0x180)]()),
                p = null;
        }
        );
        T[x(0x12a)](document[x(0x1ea)], {
            'childList': !0x0,
            'subtree': !0x0
        }),
        this[x(0x237)] = T;
    }
    ['_maintainFrame']() {
        const I = A;
        this['_main_iframe'][I(0x255)]('scrolling', 'no'),
        this['_main_iframe'][I(0x255)](I(0x1c9), 'seamless'),
        this['_main_iframe'][I(0x255)](I(0x19c), I(0x250)),
        this[I(0x241)][I(0x255)]('allow', I(0x140));
        let p = window['getComputedStyle'](this[I(0x241)])[I(0x166)];
        p = p[I(0x122)]('px', ''),
        p > 0x1388 && !this[I(0x176)] && (this[I(0x19e)](0x64, 0x11),
        this[I(0x176)] = !0x0),
        this['_main_iframe'][I(0x255)](I(0x116), 'width:\x20100%\x20!important;\x20height:\x20100%\x20!important;\x20margin:\x20auto\x20!important;\x20visibility:\x20visible\x20!important;\x20border:none\x20!important;\x20max-width:\x20100%\x20!important;\x20max-height:\x20100%\x20!important;\x20z-index:\x201\x20!important;\x20display:\x20block\x20!important;\x20position:\x20absolute\x20!important;\x20top:\x200px\x20!important;\x20right:\x200px\x20!important;\x20bottom:\x200px\x20!important;\x20left:\x200px\x20!important;\x20');
    }
    [A(0x249)](p) {
        const V = A;
        let T = p['data'][V(0x222)];
        V(0x14c) == T && (this[V(0x207)]['style'][V(0x1df)] = 'none',
        this[V(0x1ee)][V(0x1de)][V(0x172)](V(0x13b)),
        this[V(0x124)] = !0x0,
        this['_container']['querySelector'](V(0x1f2))[V(0x116)][V(0x1df)] = V(0x25a));
        if (V(0x1f6) == T)
            ;
        else {
            if (V(0x133) == T) {
                this[V(0x181)] = p[V(0x216)][V(0x1aa)];
                let Q = p['data']['duration'];
                this['_updateSeekBarInfo'](0x0, Q),
                this[V(0x19f)] = Q;
            } else {
                if (V(0x24d) == T) {
                    let s = p[V(0x216)][V(0x117)];
                    this[V(0x1b7)](s, null);
                } else {
                    if (V(0x1e1) == T)
                        this['_buffering_spinner']['style'][V(0x1df)] = V(0x15d),
                        this[V(0x1dd)] = !0x0,
                        this[V(0x17c)] = -0x1,
                        this[V(0x1ad)] = !0x1;
                    else {
                        if (V(0x1a6) == T)
                            this[V(0x207)]['style'][V(0x1df)] = V(0x1ae),
                            this[V(0x1dd)] = !0x1;
                        else {
                            if (V(0x18c) == T)
                                this[V(0x207)][V(0x116)][V(0x1df)] = 'none',
                                this[V(0x1c2)](V(0x18c)),
                                this[V(0x17c)] = 0x2,
                                self[V(0x160)] = 0x2,
                                this[V(0x1ad)] = !0x1;
                            else {
                                if (V(0x226) == T)
                                    this['_emit'](V(0x226)),
                                    this['_is_video_buffering'] ? (this[V(0x17c)] = -0x1,
                                    self[V(0x160)] = -0x1,
                                    this[V(0x207)][V(0x116)][V(0x1df)] = V(0x15d)) : (this['_status'] = 0x1,
                                    self['status'] = 0x1,
                                    this[V(0x1ad)] = !0x0);
                                else {
                                    if ('playing' == T)
                                        this[V(0x17c)] = 0x1,
                                        this[V(0x1ad)] = !0x0;
                                    else {
                                        if (V(0x1fb) == T)
                                            this[V(0x17c)] = -0x1;
                                        else {
                                            if (V(0x150) == T)
                                                this[V(0x17c)] = 0x0;
                                            else {
                                                if ('ended' == T)
                                                    this[V(0x17c)] = 0x3,
                                                    this['_is_playing'] = !0x1,
                                                    this[V(0x1c2)](V(0x153));
                                                else {
                                                    if ('init' == T)
                                                        this[V(0x207)][V(0x116)][V(0x1df)] = V(0x1ae);
                                                    else {
                                                        if (V(0x16d) == T)
                                                            this[V(0x1c2)](V(0x16d));
                                                        else {
                                                            if ('volumechange' == T) {
                                                                const K = {
                                                                    'name': V(0x21e),
                                                                    'value': 0x64 * p['data']['value']
                                                                };
                                                                this['_emit']('volumechange', K);
                                                            } else {
                                                                if (V(0x194) == T) {
                                                                    const C = {
                                                                        'name': V(0x194),
                                                                        'currentTime': p['data']['currentTime']
                                                                    };
                                                                    this['_emit'](V(0x194), C);
                                                                } else
                                                                    V(0x248) == T && (p[V(0x216)][V(0x139)] && V(0x1d6) === p[V(0x216)]['value'] && (this['_container'][V(0x184)](V(0x132))[V(0x116)][V(0x1df)] = 'none'),
                                                                    p[V(0x216)]['value'] && 'shaka' === p[V(0x216)][V(0x139)] && (this[V(0x1bd)]['querySelector'](V(0x132))['style'][V(0x1df)] = V(0x25a)));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    [A(0x1b7)](p, T) {
        const y0 = A;
        let Q = this[y0(0x1bd)][y0(0x184)](y0(0x126));
        null == T && (T = Q[y0(0x16e)]),
        Q[y0(0x255)]('max', T),
        Q['value'] = p;
        let K = this['_container'][y0(0x184)](y0(0x21c))
          , C = this[y0(0x20a)](p)
          , O = this['_secondsToHHMMSS'](T);
        K[y0(0x1f7)] = C + '\x20/\x20' + O + '\x20';
        let j = p / T * 0x64
          , H = j;
        this[y0(0x1bd)][y0(0x184)](y0(0x14d))[y0(0x116)][y0(0x1a4)] = y0(0x1e6) + j + y0(0x1d3) + j + y0(0x1d3) + H + '%,\x20rgba(255,\x20255,\x20255,\x200.4)\x20' + H + y0(0x22a) + H + '%,\x20rgba(255,\x20255,\x20255,\x200.2)\x20' + H + y0(0x192);
    }
    [A(0x20a)](p) {
        const y1 = A
          , T = parseInt(p, 0xa);
        return [Math[y1(0x23d)](T / 0xe10), Math[y1(0x23d)](T / 0x3c) % 0x3c, T % 0x3c][y1(0x164)](Q=>Q < 0xa ? '0' + Q : Q)[y1(0x159)]((Q,s)=>'00' !== Q || s > 0x0)['join'](':');
    }
    ['_registerCheater'](p, T) {
        const y2 = A
          , Q = {
            'type': y2(0x1c5),
            'data': {
                'cat': p,
                'code': T
            }
        };
        this[y2(0x13c)](Q, '*');
    }
    [A(0x19e)](p, T, Q) {
        const y3 = A;
        var s = {
            'type': 'player_code',
            'data': {
                'cat': p,
                'code': T,
                'notes': Q
            }
        };
        this[y3(0x13c)](s, '*');
    }
    [A(0x197)]() {
        const y4 = A
          , p = this
          , T = this[y4(0x1bd)];
        this[y4(0x1a5)] = this[y4(0x1bd)]['querySelector'](y4(0x23b)),
        this[y4(0x1ee)] = this[y4(0x1bd)][y4(0x184)]('#inks-big-play-button'),
        this[y4(0x146)] = this[y4(0x1bd)][y4(0x184)](y4(0x1bc)),
        this[y4(0x17e)] = this[y4(0x1bd)]['querySelector'](y4(0x186)),
        this['_forwardBtn'] = this[y4(0x1bd)][y4(0x184)](y4(0x258)),
        this[y4(0x12e)] = this['_container'][y4(0x184)](y4(0x1ed)),
        this[y4(0x121)] = this[y4(0x1bd)][y4(0x184)]('#inks-fullscreen-button'),
        this[y4(0x207)] = this[y4(0x1bd)][y4(0x184)](y4(0x23f)),
        this[y4(0x1d7)] = this[y4(0x1bd)][y4(0x184)](y4(0x12f)),
        this[y4(0x1b8)] = this[y4(0x1bd)][y4(0x184)](y4(0x173)),
        this[y4(0x1e0)] = this[y4(0x1bd)][y4(0x184)](y4(0x206)),
        this['_menu_playback_back_btn'] = this[y4(0x1bd)][y4(0x184)](y4(0x231)),
        this['_playbackspeed_050'] = this['_container'][y4(0x184)](y4(0x15c)),
        this[y4(0x13d)] = this[y4(0x1bd)][y4(0x184)]('#inks-playbackrate-075'),
        this[y4(0x219)] = this[y4(0x1bd)][y4(0x184)](y4(0x11b)),
        this[y4(0x22c)] = this['_container'][y4(0x184)]('#inks-playbackrate-125'),
        this[y4(0x1fd)] = this[y4(0x1bd)][y4(0x184)]('#inks-playbackrate-150'),
        this[y4(0x22e)] = this[y4(0x1bd)][y4(0x184)](y4(0x134)),
        this[y4(0x24e)] = this[y4(0x1bd)][y4(0x184)](y4(0x1d5)),
        this[y4(0x234)] = this[y4(0x1bd)][y4(0x184)](y4(0x1e7)),
        this[y4(0x1b9)] = this[y4(0x1bd)]['querySelector'](y4(0x20e)),
        this['_menu_res_240_btn'] = this[y4(0x1bd)][y4(0x184)](y4(0x135)),
        this[y4(0x1db)] = this[y4(0x1bd)][y4(0x184)]('#inks-res-144-button'),
        this[y4(0x214)] = this['_container'][y4(0x184)](y4(0x20c)),
        this[y4(0x11c)] = this['_container'][y4(0x184)](y4(0x143)),
        this['_muteBtn'] = this['_container']['querySelector'](y4(0x1b6)),
        this[y4(0x138)] = this[y4(0x1bd)][y4(0x184)]('#inks-seekbar'),
        this[y4(0x1e5)] = this[y4(0x1bd)]['querySelector'](y4(0x1f2)),
        this[y4(0x1a5)][y4(0x1cb)] = function(Q) {
            const y5 = y4;
            Q[y5(0x15f)]();
            let s = this[y5(0x1f7)];
            p[y5(0x124)] && (T['querySelector'](y5(0x125))['style'][y5(0x188)] = y5(0x12b),
            p[y5(0x1ee)][y5(0x1de)]['add'](y5(0x13b)),
            y5(0x238) == s ? p[y5(0x245)]() : p[y5(0x136)]());
        }
        ,
        this[y4(0x146)][y4(0x1cb)] = function(Q) {
            const y6 = y4;
            p['_hideMenu'](),
            p[y6(0x211)]() && !p['_isBigPlayButtonVisible']() ? p[y6(0x161)]() : T['querySelector']('#inks-small-play-button')[y6(0x1cd)]();
        }
        ,
        this[y4(0x146)][y4(0x17a)] = function(Q) {
            const y7 = y4;
            Q[y7(0x15f)](),
            Q['offsetX'] > p[y7(0x146)]['offsetWidth'] / 0x2 ? p[y7(0x196)]() : p[y7(0x247)]();
        }
        ,
        T[y4(0x235)] = function(Q) {
            p['_showBottomPanel']();
        }
        ,
        T[y4(0x17b)] = function(Q) {
            const y8 = y4;
            if (p[y8(0x211)]())
                Q[y8(0x137)]();
            else
                p[y8(0x1e5)][y8(0x1de)]['contains'](y8(0x12c)) && p['_showBottomPanel'](),
                clearTimeout(p[y8(0x1c8)]),
                p['_mouse_move_timeout'] = setTimeout(function() {
                    const y9 = y8;
                    p[y9(0x152)]();
                }, p[y8(0x1b2)]);
        }
        ,
        T[y4(0x165)] = function(Q) {
            const yy = y4;
            p[yy(0x152)](),
            clearTimeout(p[yy(0x1c8)]);
        }
        ,
        this[y4(0x17e)][y4(0x1cb)] = function(Q) {
            const yS = y4;
            Q[yS(0x15f)](),
            p[yS(0x247)]();
        }
        ,
        this['_forwardBtn']['onclick'] = function(Q) {
            const yp = y4;
            Q[yp(0x15f)](),
            p[yp(0x196)]();
        }
        ,
        this['_menuBtn']['onclick'] = function(Q) {
            const yT = y4;
            Q[yT(0x15f)](),
            p[yT(0x191)]();
        }
        ,
        this['_menu_res_btn'][y4(0x1cb)] = function(Q) {
            const yQ = y4;
            Q[yQ(0x15f)](),
            T[yQ(0x184)]('#inks-resolutions')[yQ(0x1de)][yQ(0x254)](yQ(0x13b));
        }
        ,
        this[y4(0x1b8)]['onclick'] = function(Q) {
            const ys = y4;
            Q[ys(0x15f)](),
            T[ys(0x184)]('#inks-playbackrate')[ys(0x1de)][ys(0x254)](ys(0x13b));
        }
        ,
        this['_menu_res_back_btn'][y4(0x1cb)] = function(Q) {
            const yK = y4;
            Q[yK(0x15f)](),
            this['parentElement'][yK(0x1de)][yK(0x254)]('ink-hidden');
        }
        ,
        this['_menu_playback_back_btn'][y4(0x1cb)] = function(Q) {
            const yC = y4;
            Q[yC(0x15f)](),
            this[yC(0x178)][yC(0x1de)][yC(0x254)](yC(0x13b));
        }
        ,
        this[y4(0x1eb)][y4(0x1cb)] = function(Q) {
            const yO = y4;
            Q[yO(0x15f)](),
            p['_changePlaybackRate'](yO(0x16a));
        }
        ,
        this['_playbackspeed_075'][y4(0x1cb)] = function(Q) {
            const yn = y4;
            Q[yn(0x15f)](),
            p['_changePlaybackRate'](yn(0x256));
        }
        ,
        this[y4(0x219)]['onclick'] = function(Q) {
            const yj = y4;
            Q['stopPropagation'](),
            p[yj(0x208)](yj(0x1d9));
        }
        ,
        this['_playbackspeed_125'][y4(0x1cb)] = function(Q) {
            Q['stopPropagation'](),
            p['_changePlaybackRate']('125');
        }
        ,
        this[y4(0x1fd)][y4(0x1cb)] = function(Q) {
            Q['stopPropagation'](),
            p['_changePlaybackRate']('150');
        }
        ,
        this[y4(0x22e)][y4(0x1cb)] = function(Q) {
            const yH = y4;
            Q[yH(0x15f)](),
            p[yH(0x208)](yH(0x17d));
        }
        ,
        this[y4(0x24e)][y4(0x1cb)] = function(Q) {
            const yi = y4;
            Q[yi(0x15f)](),
            p[yi(0x208)]('200');
        }
        ,
        this[y4(0x234)]['onclick'] = function(Q) {
            const yR = y4;
            Q[yR(0x15f)](),
            p['_changeQuality'](0x2d0),
            p[yR(0x191)]();
        }
        ,
        this[y4(0x1b9)][y4(0x1cb)] = function(Q) {
            const yW = y4;
            Q[yW(0x15f)](),
            p[yW(0x23c)](0x1e0),
            p[yW(0x191)]();
        }
        ,
        this[y4(0x1e4)]['onclick'] = function(Q) {
            const yA = y4;
            Q[yA(0x15f)](),
            p[yA(0x23c)](0xf0),
            p['_toggleMenu']();
        }
        ,
        this[y4(0x1db)]['onclick'] = function(Q) {
            const yz = y4;
            Q[yz(0x15f)](),
            p['_changeQuality'](0x90),
            p[yz(0x191)]();
        }
        ,
        this[y4(0x214)][y4(0x1cb)] = function(Q) {
            const yF = y4;
            Q[yF(0x15f)](),
            p['_changeQuality'](yF(0x1b3)),
            p[yF(0x191)]();
        }
        ,
        this['_volume_range'][y4(0x213)] = function(Q) {
            const yY = y4;
            Q['stopPropagation']();
            let s = Q['target'][yY(0x139)];
            p[yY(0x1bf)](s);
        }
        ,
        this[y4(0x1af)][y4(0x1cb)] = function(Q) {
            const yk = y4;
            Q[yk(0x15f)](),
            p[yk(0x169)]();
        }
        ,
        this[y4(0x138)][y4(0x213)] = function(Q) {
            const yM = y4;
            Q[yM(0x15f)](),
            p[yM(0x13a)](Q[yM(0x15a)][yM(0x139)]);
        }
        ,
        this[y4(0x138)][y4(0x1cb)] = function(Q) {
            const yr = y4;
            Q[yr(0x15f)]();
        }
        ,
        this[y4(0x121)][y4(0x1cb)] = function(Q) {
            const yu = y4;
            Q['stopPropagation'](),
            p[yu(0x1b4)]();
        }
        ;
    }
    ['_showBottomPanel']() {
        const yd = A;
        this[yd(0x1e5)][yd(0x1de)][yd(0x172)](yd(0x12c));
    }
    [A(0x152)]() {
        const yB = A;
        this[yB(0x1e5)][yB(0x1de)][yB(0x20b)]('inks-hidden');
    }
    [A(0x1e3)]() {
        const yD = A;
        return !this['_bigPlayBtn'][yD(0x1de)][yD(0x21d)](yD(0x13b));
    }
    [A(0x161)]() {
        const yc = A;
        this[yc(0x1e5)][yc(0x1de)][yc(0x254)](yc(0x12c));
    }
    [A(0x208)](p) {
        const yU = A
          , T = this[yU(0x1ce)][p];
        Object[yU(0x20d)](this[yU(0x1ce)])[yU(0x1ec)](s=>{
            const ye = yU;
            s == p ? this[ye(0x1bd)]['querySelector'](ye(0x24a) + s)[ye(0x1de)][ye(0x172)](ye(0x13b)) : this[ye(0x1bd)][ye(0x184)](ye(0x24a) + s)[ye(0x1de)][ye(0x20b)](ye(0x13b));
        }
        ),
        this[yU(0x1bd)][yU(0x184)](yU(0x18a))[yU(0x1f7)] = T[yU(0x1e8)];
        const Q = {
            'type': 'player',
            'data': {
                'action': yU(0x21b),
                'playback_rate': T[yU(0x139)]
            }
        };
        this[yU(0x13c)](Q, '*'),
        this[yU(0x191)]();
    }
    [A(0x23c)](p) {
        const yt = A;
        this['_resolution_rates'][yt(0x1ec)](Q=>{
            const yX = yt;
            Q == p ? this[yX(0x1bd)][yX(0x184)](yX(0x141) + Q)[yX(0x1de)]['remove']('ink-hidden') : this[yX(0x1bd)][yX(0x184)](yX(0x141) + Q)['classList']['add']('ink-hidden');
        }
        ),
        this[yt(0x1bd)]['querySelector'](yt(0x148))[yt(0x1f7)] = isNaN(p) ? p : p + 'p';
        const T = {
            'type': 'player',
            'data': {
                'action': yt(0x11d),
                'quality': p
            }
        };
        this[yt(0x13c)](T, '*');
    }
    ['_setToPause']() {
        const yJ = A;
        this[yJ(0x13c)]({
            'type': 'player',
            'data': {
                'action': yJ(0x18c)
            }
        }, '*'),
        this[yJ(0x1a5)][yJ(0x1f7)] = yJ(0x238);
    }
    ['_setToPlay']() {
        const ym = A;
        this[ym(0x13c)]({
            'type': ym(0x205),
            'data': {
                'action': 'play'
            }
        }, '*'),
        this[ym(0x1a5)][ym(0x1f7)] = 'pause',
        this[ym(0x1ee)][ym(0x1de)][ym(0x20b)](ym(0x13b));
    }
    [A(0x1bf)](p) {
        const yv = A
          , T = {
            'type': yv(0x205),
            'data': {
                'action': yv(0x1f6),
                'volume': p
            }
        };
        this[yv(0x13c)](T, '*'),
        this[yv(0x1af)][yv(0x1f7)] = yv(0x251);
    }
    ['_toggleMute']() {
        const yg = A;
        yg(0x251) == this[yg(0x1af)]['innerHTML'] ? this[yg(0x131)]() : this[yg(0x232)]();
    }
    [A(0x131)]() {
        const yf = A;
        this[yf(0x13c)]({
            'type': yf(0x205),
            'data': {
                'action': yf(0x22b)
            }
        }, '*'),
        this['_muteBtn'][yf(0x1f7)] = yf(0x17f);
    }
    [A(0x232)]() {
        const ya = A;
        this[ya(0x13c)]({
            'type': ya(0x205),
            'data': {
                'action': ya(0x189)
            }
        }, '*'),
        this[ya(0x1af)]['innerHTML'] = 'volume_up';
    }
    [A(0x13a)](p) {
        const yb = A
          , T = {
            'type': yb(0x205),
            'data': {
                'action': yb(0x1d8),
                'ctime': p
            }
        };
        this['_sendMessageToIframe'](T, '*');
    }
    [A(0x23a)]() {
        const yG = A;
        this[yG(0x1bd)][yG(0x184)](yG(0x183))['classList']['add'](yG(0x13b)),
        this[yG(0x1bd)]['querySelector'](yG(0x14f))[yG(0x1de)][yG(0x20b)](yG(0x13b)),
        this[yG(0x1bd)][yG(0x184)](yG(0x204))[yG(0x1de)][yG(0x20b)]('ink-hidden');
    }
    [A(0x191)]() {
        const yw = A;
        this['_container'][yw(0x184)](yw(0x183))[yw(0x1de)]['toggle']('ink-hidden'),
        this[yw(0x1bd)][yw(0x184)]('#inks-resolutions')[yw(0x1de)][yw(0x20b)](yw(0x13b)),
        this[yw(0x1bd)][yw(0x184)](yw(0x204))[yw(0x1de)][yw(0x20b)](yw(0x13b));
    }
    [A(0x196)]() {
        const yq = A;
        this[yq(0x13c)]({
            'type': 'player',
            'data': {
                'action': 'forward'
            }
        }, '*');
    }
    [A(0x247)]() {
        const yL = A;
        this[yL(0x13c)]({
            'type': yL(0x205),
            'data': {
                'action': yL(0x14b)
            }
        }, '*');
    }
    [A(0x1b4)]() {
        const yo = A;
        if (this[yo(0x181)]) {
            let p = this[yo(0x1bd)];
            this[yo(0x225)] ? document[yo(0x1f9)] ? document[yo(0x1f9)]() : document[yo(0x16b)] ? document['mozCancelFullScreen']() : document[yo(0x242)] ? document[yo(0x242)]() : document['msExitFullscreen'] && document[yo(0x162)]() : p['requestFullscreen'] ? p['requestFullscreen']() : p['mozRequestFullScreen'] ? p[yo(0x1e9)]() : p[yo(0x154)] ? p[yo(0x154)]() : p[yo(0x221)] && p[yo(0x221)](),
            this[yo(0x225)] = !this['_is_full_Screen'];
        } else
            this[yo(0x130)] ? this[yo(0x1bb)]() : this['_setMainContainerStyleFullscreen'](),
            this[yo(0x130)] = !this['_non_native_is_full_screen_active'];
    }
    [A(0x177)]() {
        const yZ = A
          , p = this[yZ(0x1bd)]['querySelector'](yZ(0x125));
        p[yZ(0x116)][yZ(0x1ef)] = '100%',
        p[yZ(0x116)][yZ(0x257)](yZ(0x1a9), 'fixed', yZ(0x14a)),
        p['style'][yZ(0x257)](yZ(0x199), '1000', yZ(0x14a)),
        p[yZ(0x116)]['setProperty'](yZ(0x19a), '0', yZ(0x14a)),
        p[yZ(0x116)][yZ(0x257)](yZ(0x123), '0', yZ(0x14a)),
        p[yZ(0x116)]['paddingTop'] = yZ(0x12b);
    }
    [A(0x1bb)]() {
        const yP = A
          , p = this[yP(0x1bd)][yP(0x184)](yP(0x125));
        p[yP(0x116)][yP(0x1ef)] = yP(0x142),
        p['style'][yP(0x257)]('position', yP(0x220), yP(0x14a)),
        p['style'][yP(0x120)] = yP(0x12b),
        p['style'][yP(0x19a)] = yP(0x12b),
        p[yP(0x116)]['left'] = yP(0x12b),
        p[yP(0x116)][yP(0x193)] = this['_padding_top_for_aspect_ratio'];
    }
    [A(0x1a8)]() {
        const yl = A;
        if (!this[yl(0x1c6)])
            return !0x1;
        let p = this[yl(0x1bd)][yl(0x184)]('#inks-controls-container');
        if (!p)
            return this[yl(0x23e)](0xc8, 0x2),
            this[yl(0x1c6)] = !0x1,
            !0x1;
        if (0x1 != this[yl(0x241)][yl(0x116)]['zIndex'])
            return this[yl(0x23e)](0xd2, 0x1),
            this['_ifr_still_active_check'] = !0x1,
            !0x1;
        if (0x3 != p['style'][yl(0x120)])
            return this[yl(0x23e)](0xd2, 0x2),
            this[yl(0x1c6)] = !0x1,
            !0x1;
        let T = this[yl(0x1bd)][yl(0x1c4)][0x0];
        if (!T || 0x4 != T[yl(0x1c4)]['length'])
            return this['_registerCheater'](0xc8, 0x3),
            this[yl(0x1c6)] = !0x1,
            !0x1;
        return !0x0;
    }
    [A(0x211)]() {
        const yN = A;
        return void 0x0 !== window[yN(0x179)];
    }
    [A(0x13f)]() {
        const yh = A;
        let p = this[yh(0x1bd)][yh(0x184)](yh(0x209))
          , T = this[yh(0x1bd)][yh(0x184)](yh(0x115))
          , Q = this['_container'][yh(0x184)](yh(0x156));
        p[yh(0x255)](yh(0x116), yh(0x217)),
        T[yh(0x255)](yh(0x116), yh(0x236)),
        Q[yh(0x255)](yh(0x116), 'display:\x20block\x20!important;visibility:visible\x20!important;\x20z-index:-5\x20!important;background-color:#000;position:\x20absolute\x20!important;top:\x200px\x20!important;width:\x20100%\x20!important;height:\x20100%\x20!important;');
    }
    [A(0x19b)](p, T) {
        const yE = A
          , Q = yE(0x149) + p + '\x22\x20name=\x22' + p + yE(0x1fe) + T + yE(0x163);
        return yE(0x144) + this[yE(0x1a1)] + yE(0x243) + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-controls-layer-x\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-controls-layer-y\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-controls-container\x22\x20style=\x22display:\x20block\x20!important;left:\x200px\x20!important;right:\x200px\x20!important;z-index:3\x20!important;\x20position:\x20absolute\x20!important;top:\x200px\x20!important;width:\x20100%\x20!important;height:\x20100%\x20!important;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*!\x20@license\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Shaka\x20Player\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Copyright\x202016\x20Google\x20LLC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20SPDX-License-Identifier:\x20Apache-2.0\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/.ink-hidden{display:none!important}.ink-video-container{position:relative;top:0;left:0;display:flex}.ink-video-container\x20.material-icons-round{font-family:\x22Material\x20Icons\x20Round\x22;font-size:24px}.ink-video-container\x20*{font-family:Roboto-Regular,Roboto,sans-serif,TengwarTelcontar}.ink-video-container:fullscreen{width:100%;height:100%;background-color:#000}.ink-video-container:fullscreen\x20.ink-text-container{font-size:4.4vmin}.ink-video-container:-webkit-full-screen{width:100%;height:100%;background-color:#000}.ink-video-container:-webkit-full-screen\x20.ink-text-container{font-size:4.4vmin}.ink-video-container:-moz-full-screen{width:100%;height:100%;background-color:#000}.ink-video-container:-moz-full-screen\x20.ink-text-container{font-size:4.4vmin}.ink-video-container:-ms-fullscreen{width:100%;height:100%;background-color:#000}.ink-video-container:-ms-fullscreen\x20.ink-text-container{font-size:4.4vmin}.ink-controls-container{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;z-index:1}.ink-video-container:not([shaka-controls=true])\x20.ink-controls-container{display:none}.ink-controls-container\x20*{flex-shrink:0}.ink-controls-container[casting=true]\x20.ink-fullscreen-button{display:none}.ink-bottom-controls{width:100%;padding:0;padding-bottom:2.5%;z-index:1;}.ink-controls-button-panel{padding:0;margin:0;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;overflow:hidden;min-width:48px;font-size:12px;font-weight:400;font-style:normal;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s}.ink-controls-container[casting=true]\x20.ink-controls-button-panel,.ink-controls-container[shown=true]\x20.ink-controls-button-panel{opacity:1}.ink-controls-button-panel>*{color:#fff;height:32px;line-height:.5;margin:1px;padding:0\x205px;background:0\x200;border:0;cursor:pointer}.ink-controls-button-panel\x20.ink-overflow-menu-only{display:none}.ink-play-button-container{margin:0;width:100%;height:100%;flex-shrink:1;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.ink-statistics-container{overflow-x:hidden;overflow-y:auto;min-width:300px;color:#fff;background-color:rgba(35\x2035\x2035\x20/\x2090%);font-size:14px;padding:5px\x2010px;border-radius:2px;position:absolute;z-index:2;left:15px;top:15px;opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s}.ink-controls-container[casting=true]\x20.ink-statistics-container,.ink-controls-container[shown=true]\x20.ink-statistics-container{opacity:1}.ink-statistics-container\x20div{display:flex;justify-content:space-between}.ink-statistics-container\x20span{color:#969696}.ink-context-menu{background-color:rgba(35\x2035\x2035\x20/\x2090%);border-radius:2px;position:absolute;z-index:3}.ink-context-menu\x20button{padding:5px\x2010px;width:100%;display:flex;align-items:center;color:#fff;background:0\x200;border:0;cursor:pointer}.ink-context-menu\x20button:hover{background-color:rgba(50\x2050\x2050\x20/\x2090%)}.ink-context-menu\x20label{padding:0\x2020px;align-items:flex-start;color:#fff;cursor:pointer}.ink-context-menu\x20.ink-current-selection-span{align-items:flex-start;color:#fff;cursor:pointer}.ink-scrim-container{margin:0;width:100%;height:100%;flex-shrink:1;position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s;background:linear-gradient(to\x20top,#000\x200,transparent\x2015%)}.ink-controls-container[casting=true]\x20.ink-scrim-container,.ink-controls-container[shown=true]\x20.ink-scrim-container{opacity:1}.ink-text-container{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;bottom:0;width:100%;min-width:48px;transition:bottom\x20cubic-bezier(.4,0,.6,1)\x20.1s;transition-delay:.5s;font-size:20px;line-height:1.4;color:#fff}.ink-text-container\x20span.ink-text-wrapper{display:inline;background:0\x200}.ink-controls-container[shown=true]~.ink-text-container{bottom:15%;transition-delay:0s}.ink-spinner-container{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.ink-video-container:not([shaka-controls=true])\x20.ink-spinner-container{display:none}.ink-spinner{position:relative;top:0;left:0;margin:0;box-sizing:border-box;padding:calc(15.6%\x20/\x202);width:0;height:0;filter:drop-shadow(0\x200\x202px\x20rgba(255\x20255\x20255\x20/\x2050%))}.ink-play-button{box-sizing:border-box;padding:calc(15%\x20/\x202);width:0;height:0;margin:0;border-radius:50%;box-shadow:rgba(0\x200\x200\x20/\x2010%)\x200\x200\x2020px\x200;border:none;background-size:50%;background-repeat:no-repeat;background-position:center\x20center;background-color:rgba(255\x20255\x20255\x20/\x2090%);opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s}.ink-controls-container[casting=true]\x20.ink-play-button,.ink-controls-container[shown=true]\x20.ink-play-button{opacity:1}.ink-play-button[icon=play]{background-image:url(data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8%205v14l11-7z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E)}.ink-play-button[icon=pause]{background-image:url(data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M6%2019h4V5H6v14zm8-14v14h4V5h-4z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E)}.ink-current-time{font-size:14px;color:#fff;cursor:pointer}.ink-current-time[disabled]{background-color:transparent;color:#fff;cursor:default}.ink-controls-container\x20button:focus,.ink-controls-container\x20input:focus{outline:1px\x20solid\x20Highlight}.ink-controls-container\x20button:-moz-focus-inner,.ink-controls-container\x20input:-moz-focus-outer{outline:0;border:0}.ink-controls-container:not(.ink-keyboard-navigation)\x20button:focus,.ink-controls-container:not(.ink-keyboard-navigation)\x20input:focus{outline:0}.ink-range-container{position:relative;top:0;left:0;margin:calc((12px\x20-\x204px)/\x202)\x206px;height:4px;border-radius:4px;background:#fff}.ink-volume-bar-container{width:100px;padding:0}.ink-range-element{-webkit-appearance:none;background:0\x200;position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;height:12px;top:calc((4px\x20-\x2012px)/\x202);z-index:1}.ink-range-element::-webkit-slider-runnable-track{width:100%;cursor:pointer;height:12px;background:0\x200;color:transparent;border:none}.ink-range-element::-webkit-slider-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.ink-range-element::-moz-range-track{width:100%;cursor:pointer;height:12px;background:0\x200;color:transparent;border:none}.ink-range-element::-moz-range-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.ink-seek-bar-container{opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s}.ink-controls-container[casting=true]\x20.ink-seek-bar-container,.ink-controls-container[shown=true]\x20.ink-seek-bar-container{opacity:1}.ink-ad-markers{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%}/*!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20@license\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20The\x20SVG/CSS\x20buffering\x20spinner\x20is\x20based\x20on\x20http://codepen.io/jczimm/pen/vEBpoL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Some\x20local\x20modifications\x20have\x20been\x20made.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Copyright\x20(c)\x202016\x20by\x20jczimm\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Permission\x20is\x20hereby\x20granted,\x20free\x20of\x20charge,\x20to\x20any\x20person\x20obtaining\x20a\x20copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20of\x20this\x20software\x20and\x20associated\x20documentation\x20files\x20(the\x20\x22Software\x22),\x20to\x20deal\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20in\x20the\x20Software\x20without\x20restriction,\x20including\x20without\x20limitation\x20the\x20rights\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20to\x20use,\x20copy,\x20modify,\x20merge,\x20publish,\x20distribute,\x20sublicense,\x20and/or\x20sell\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20copies\x20of\x20the\x20Software,\x20and\x20to\x20permit\x20persons\x20to\x20whom\x20the\x20Software\x20is\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20furnished\x20to\x20do\x20so,\x20subject\x20to\x20the\x20following\x20conditions:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20The\x20above\x20copyright\x20notice\x20and\x20this\x20permission\x20notice\x20shall\x20be\x20included\x20in\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20all\x20copies\x20or\x20substantial\x20portions\x20of\x20the\x20Software.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20THE\x20SOFTWARE\x20IS\x20PROVIDED\x20\x22AS\x20IS\x22,\x20WITHOUT\x20WARRANTY\x20OF\x20ANY\x20KIND,\x20EXPRESS\x20OR\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20IMPLIED,\x20INCLUDING\x20BUT\x20NOT\x20LIMITED\x20TO\x20THE\x20WARRANTIES\x20OF\x20MERCHANTABILITY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20FITNESS\x20FOR\x20A\x20PARTICULAR\x20PURPOSE\x20AND\x20NONINFRINGEMENT.\x20IN\x20NO\x20EVENT\x20SHALL\x20THE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20AUTHORS\x20OR\x20COPYRIGHT\x20HOLDERS\x20BE\x20LIABLE\x20FOR\x20ANY\x20CLAIM,\x20DAMAGES\x20OR\x20OTHER\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20LIABILITY,\x20WHETHER\x20IN\x20AN\x20ACTION\x20OF\x20CONTRACT,\x20TORT\x20OR\x20OTHERWISE,\x20ARISING\x20FROM,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20OUT\x20OF\x20OR\x20IN\x20CONNECTION\x20WITH\x20THE\x20SOFTWARE\x20OR\x20THE\x20USE\x20OR\x20OTHER\x20DEALINGS\x20IN\x20THE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20SOFTWARE.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/.ink-spinner-svg{position:absolute;top:0;left:0;right:0;bottom:0;animation:rotate\x202s\x20linear\x20infinite;transform-origin:center\x20center;width:100%;height:100%;margin:0;padding:0}.ink-spinner-path{stroke:#202124;stroke-dasharray:20,200;stroke-dashoffset:0;animation:dash\x201s\x20ease-in-out\x20infinite;stroke-linecap:round}@keyframes\x20rotate{100%{transform:rotate(360deg)}}@keyframes\x20dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.ink-spacer{cursor:default;flex-shrink:1;flex-grow:1;margin:0}.ink-overflow-menu,.ink-settings-menu{overflow-x:hidden;overflow-y:auto;white-space:nowrap;background:#fff;box-shadow:0\x201px\x209px\x200\x20rgba(0\x200\x200\x20/\x2040%);border-radius:2px;max-height:250px;min-width:180px;opacity:0;transition:opacity\x20cubic-bezier(.4,0,.6,1)\x20.6s;display:flex;flex-direction:column;position:absolute;z-index:2;right:15px;bottom:30px}.ink-controls-container[casting=true]\x20.ink-overflow-menu,.ink-controls-container[casting=true]\x20.ink-settings-menu,.ink-controls-container[shown=true]\x20.ink-overflow-menu,.ink-controls-container[shown=true]\x20.ink-settings-menu{opacity:1}.ink-overflow-menu\x20button,.ink-settings-menu\x20button{font-size:14px;background:0\x200;color:#000;border:none;min-height:30px;padding:3.5px\x206px;display:flex;align-items:center;cursor:pointer}.ink-overflow-menu\x20button:hover,.ink-settings-menu\x20button:hover{background:#e0e0e0}.ink-overflow-menu\x20button\x20label,.ink-settings-menu\x20button\x20label{cursor:pointer}.ink-keyboard-navigation\x20.ink-overflow-menu\x20button:focus,.ink-keyboard-navigation\x20.ink-settings-menu\x20button:focus{background:#e0e0e0}.ink-overflow-menu\x20i,.ink-settings-menu\x20i{padding-left:10px;padding-right:10px}.ink-overflow-menu.ink-low-position,.ink-settings-menu.ink-low-position{bottom:15px}.ink-overflow-menu\x20span{text-align:left}.ink-overflow-button-label{position:relative;display:flex;flex-direction:column}.ink-current-selection-span{color:rgba(0\x200\x200\x20/\x2054%)}.ink-settings-menu\x20span{margin-left:54px}.ink-back-to-overflow-button\x20span{margin-left:0}.ink-back-to-overflow-button\x20i{padding-right:20px}.ink-auto-span{left:17px}.ink-controls-container[ad-active=true]{pointer-events:none}.ink-controls-container[ad-active=true]\x20.ink-bottom-controls{pointer-events:auto}.ink-client-side-ad-container,.ink-server-side-ad-container{position:absolute;left:0;right:0;top:0;bottom:0}.ink-video-container[shaka-controls=true]\x20.ink-client-side-ad-container\x20iframe,.ink-video-container[shaka-controls=true]\x20.ink-server-side-ad-container\x20iframe{height:90%}.ink-server-side-ad-container{width:100%;height:100%;flex-shrink:1}.ink-server-side-ad-container:not([ad-active=true]){pointer-events:none}.ink-ad-controls{display:flex;flex-direction:row;z-index:1;padding-bottom:1%}.ink-video-container:not([shaka-controls=true])\x20.ink-ad-controls{display:none}.ink-ad-controls\x20button,.ink-ad-controls\x20div{color:#fff;font-size:initial}.ink-ad-controls\x20div:not(.ink-skip-ad-counter){margin:1px}.ink-ad-counter,.ink-ad-position{display:flex;justify-content:flex-end;flex-direction:column;text-shadow:1px\x201px\x204px\x20#000}.ink-skip-ad-container{position:relative;right:calc((100%\x20-\x2096%)/\x202\x20*\x20-1);display:flex;flex-direction:row;margin:0}.ink-skip-ad-button{padding:5px\x2015px;background:rgba(0\x200\x200\x20/\x2070%);border:none;cursor:pointer}.ink-skip-ad-button:disabled{background:rgba(0\x200\x200\x20/\x2030%)}.ink-skip-ad-counter{padding:5px;background:rgba(0\x200\x200\x20/\x2070%);margin:0}/*!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20@license\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20The\x20tooltip\x20is\x20based\x20on\x20https://github.com/felipefialho/css-components/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Local\x20modifications\x20have\x20been\x20performed.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Copyright\x20(c)\x202017\x20Felipe\x20Fialho\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20Permission\x20is\x20hereby\x20granted,\x20free\x20of\x20charge,\x20to\x20any\x20person\x20obtaining\x20a\x20copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20of\x20this\x20software\x20and\x20associated\x20documentation\x20files\x20(the\x20\x22Software\x22),\x20to\x20deal\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20in\x20the\x20Software\x20without\x20restriction,\x20including\x20without\x20limitation\x20the\x20rights\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20to\x20use,\x20copy,\x20modify,\x20merge,\x20publish,\x20distribute,\x20sublicense,\x20and/or\x20sell\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20copies\x20of\x20the\x20Software,\x20and\x20to\x20permit\x20persons\x20to\x20whom\x20the\x20Software\x20is\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20furnished\x20to\x20do\x20so,\x20subject\x20to\x20the\x20following\x20conditions:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20The\x20above\x20copyright\x20notice\x20and\x20this\x20permission\x20notice\x20shall\x20be\x20included\x20in\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20all\x20copies\x20or\x20substantial\x20portions\x20of\x20the\x20Software.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20THE\x20SOFTWARE\x20IS\x20PROVIDED\x20\x22AS\x20IS\x22,\x20WITHOUT\x20WARRANTY\x20OF\x20ANY\x20KIND,\x20EXPRESS\x20OR\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20IMPLIED,\x20INCLUDING\x20BUT\x20NOT\x20LIMITED\x20TO\x20THE\x20WARRANTIES\x20OF\x20MERCHANTABILITY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20FITNESS\x20FOR\x20A\x20PARTICULAR\x20PURPOSE\x20AND\x20NONINFRINGEMENT.\x20IN\x20NO\x20EVENT\x20SHALL\x20THE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20AUTHORS\x20OR\x20COPYRIGHT\x20HOLDERS\x20BE\x20LIABLE\x20FOR\x20ANY\x20CLAIM,\x20DAMAGES\x20OR\x20OTHER\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20LIABILITY,\x20WHETHER\x20IN\x20AN\x20ACTION\x20OF\x20CONTRACT,\x20TORT\x20OR\x20OTHERWISE,\x20ARISING\x20FROM,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20OUT\x20OF\x20OR\x20IN\x20CONNECTION\x20WITH\x20THE\x20SOFTWARE\x20OR\x20THE\x20USE\x20OR\x20OTHER\x20DEALINGS\x20IN\x20THE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20SOFTWARE.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/.ink-tooltips-on{overflow:visible}.ink-tooltips-on>[class*=shaka-tooltip]{position:relative}.ink-tooltips-on>[class*=shaka-tooltip]:active:after,.ink-tooltips-on>[class*=shaka-tooltip]:focus-visible:after,.ink-tooltips-on>[class*=shaka-tooltip]:hover:after{content:attr(aria-label);font-family:Roboto-Regular,Roboto,sans-serif;line-height:calc(32px\x20/\x202);white-space:nowrap;font-size:13px;background:rgba(35\x2035\x2035\x20/\x2090%);color:#fff;border-radius:3px;padding:5px\x2010px;position:absolute;bottom:calc(32px\x20+\x205px);left:calc(32px\x20/\x202);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.ink-tooltips-on>.ink-tooltip-status:active:after,.ink-tooltips-on>.ink-tooltip-status:focus-visible:after,.ink-tooltips-on>.ink-tooltip-status:hover:after{content:attr(aria-label)\x20\x22\x20(\x22\x20attr(shaka-status)\x20\x22)\x22}.ink-tooltips-on\x20button:first-child:active:after,.ink-tooltips-on\x20button:first-child:focus-visible:after,.ink-tooltips-on\x20button:first-child:hover:after{left:0;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}.ink-tooltips-on\x20button:last-child:active:after,.ink-tooltips-on\x20button:last-child:focus-visible:after,.ink-tooltips-on\x20button:last-child:hover:after{left:32px;-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf)\x20format(\x27truetype\x27)}@font-face{font-family:\x27Material\x20Icons\x20Round\x27;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialiconsround/v105/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmM.otf)\x20format(\x27opentype\x27)}.material-icons-round{font-family:\x27Material\x20Icons\x20Round\x27;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@font-face\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-style:\x20normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-display:\x20swap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20src:\x20url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf)\x20format(\x27truetype\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@font-face\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-style:\x20normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-display:\x20swap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20src:\x20url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9vAw.ttf)\x20format(\x27truetype\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-bottom-controls\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-bottom-controls\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-webkit-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-ms-flexbox;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-orient:\x20vertical;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-direction:\x20normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-ad-controls\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x203;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-range-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x204px\x2010px\x204px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-small-play-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x20-2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x20-3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x20-3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-mute-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x20-1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x20-2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x20-2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20>\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#EEE;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20>\x20*:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-shadow:\x20inset\x200\x200\x200\x202px\x20rgba(27,\x20127,\x20204,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x202px\x20rgba(27,\x20127,\x20204,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FFF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20>\x20*:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FFF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20.ink-volume-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20-1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x20-1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x20-1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-transition:\x20width\x200.2s\x20cubic-bezier(0.4,\x200,\x201,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.2s\x20cubic-bezier(0.4,\x200,\x201,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20.ink-volume-bar-container:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-controls-button-panel\x20.ink-volume-bar-container:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-mute-button:hover\x20+\x20div\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-current-time\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container\x20.ink-range-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container:hover\x20.ink-range-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container\x20input[type=range]::-webkit-slider-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container\x20input[type=range]::-moz-range-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-seek-bar-container\x20input[type=range]::-ms-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-video-container\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-video-container\x20.material-icons-round\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Material\x20Icons\x20Sharp\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(28,\x2028,\x2028,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x200\x200\x202px\x20rgb(0\x200\x200%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-transition:\x20opacity\x200.1s\x20cubic-bezier(0,\x200,\x200.2,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.1s\x20cubic-bezier(0,\x200,\x200.2,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-moz-user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x200\x208px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x2033px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button[aria-selected=\x22true\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-webkit-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-ms-flexbox;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button[aria-selected=\x22true\x22]\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x203;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button[aria-selected=\x22true\x22]\x20i\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-ordinal-group:\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-order:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button\x20i\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button\x20.ink-overflow-button-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-webkit-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-ms-flexbox;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-pack:\x20justify;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-pack:\x20justify;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-orient:\x20horizontal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-direction:\x20normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-direction:\x20row;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20row;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20default;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-flex:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex:\x200\x200\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x200\x200\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button\x20.ink-overflow-button-label\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-negative:\x20initial;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-shrink:\x20initial;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-webkit-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20-ms-flexbox;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-box-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-flex-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20span\x20+\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FFF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20span\x20+\x20span:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22navigate_next\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Material\x20Icons\x20Sharp\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20.ink-pip-button\x20span\x20+\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x2015px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20.ink-pip-button\x20span\x20+\x20span:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-back-to-overflow-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#eee;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-back-to-overflow-button\x20.material-icons-round\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-back-to-overflow-button\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x203px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button:hover\x20label,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button:hover\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button:focus,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu\x20button,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-settings-menu\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#EEE;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-captions-off\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#BFBFBF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-overflow-menu-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.youtube-theme\x20.ink-fullscreen-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2025px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-transition:\x20font-size\x200.1s\x20cubic-bezier(0,\x200,\x200.2,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20font-size\x200.1s\x20cubic-bezier(0,\x200,\x200.2,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-forward-button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-moz-transform:\x20scale(-1,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-o-transform:\x20scale(-1,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-transform:\x20scale(-1,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(-1,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-bottom-controls{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-bottom-controls.inks-hidden{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-current-time\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-volume-bar-container\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2065px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-controls-button-panel\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:15px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-range-container\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ink-bottom-controls\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#00000042;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#inks-buffering-spinner-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(33,\x2033,\x2033,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2055px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2055px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.inks-buffering-spinner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2048px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2048px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20inks-buffering-spinner-rotate\x201s\x20linear\x20infinite\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.inks-buffering-spinner::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x205px\x20solid\x20#FFF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20inks-buffering-spinner-prix-clip-fix\x202s\x20linear\x20infinite\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20inks-buffering-spinner-rotate\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20\x20\x20{transform:\x20rotate(360deg)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20inks-buffering-spinner-prix-clip-fix\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20\x20\x20{clip-path:polygon(50%\x2050%,0\x200,0\x200,0\x200,0\x200,0\x200)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2025%\x20\x20{clip-path:polygon(50%\x2050%,0\x200,100%\x200,100%\x200,100%\x200,100%\x200)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20\x20{clip-path:polygon(50%\x2050%,0\x200,100%\x200,100%\x20100%,100%\x20100%,100%\x20100%)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2075%\x20\x20{clip-path:polygon(50%\x2050%,0\x200,100%\x200,100%\x20100%,0\x20100%,0\x20100%)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{clip-path:polygon(50%\x2050%,0\x200,100%\x200,100%\x20100%,0\x20100%,0\x200)}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-controls-container\x22\x20shown=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-big-play-button\x22\x20class=\x22ink-play-button-container\x20ink-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ink-play-button\x20ink-no-propagation\x22\x20icon=\x22play\x22\x20aria-label=\x22Play\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-scrim\x22\x20class=\x22ink-scrim-container\x22\x20style=\x22background:\x20none;\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-server-side-ad-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-bottom-controls\x22\x20class=\x22ink-bottom-controls\x20ink-no-propagation\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-ad-controls\x20ink-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-ad-position\x20ink-hidden\x22><span\x20class=\x22ink-ad-position-span\x22></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-ad-counter\x22><span\x20class=\x22ink-ad-counter-span\x22></span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-controls-button-panel\x20ink-show-controls-on-mouse-over\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-replay-button\x22\x20class=\x22ink-replay-button\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22Replay\x22>replay</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-small-play-button\x22\x20class=\x22ink-small-play-button\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22Play\x22>play_arrow</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-forward-button\x22\x20class=\x22ink-forward-button\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22Forward\x22>replay</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-current-time\x22\x20class=\x22ink-current-time\x22\x20disabled=\x22\x22>00:00\x20/\x2000:00</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-spacer\x22\x20aria-hidden=\x22true\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-mute-button\x22\x20class=\x22ink-mute-button\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22Mute\x22>volume_up</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-range-container\x20ink-volume-bar-container\x22\x20style=\x22display:\x20none;\x20background:\x20rgba(0,\x200,\x200,\x200)\x20linear-gradient(to\x20right,\x20rgb(255,\x20255,\x20255)\x20100%,\x20rgba(255,\x20255,\x20255,\x200.54)\x20100%,\x20rgba(255,\x20255,\x20255,\x200.54)\x20100%)\x20repeat\x20scroll\x200%\x200%;\x22><input\x20id=\x22inks-volume\x22\x20class=\x22ink-range-element\x20ink-volume-bar\x22\x20type=\x22range\x22\x20step=\x22any\x22\x20min=\x220\x22\x20max=\x221\x22\x20aria-label=\x22Volume\x22\x20value=\x221\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-fullscreen-button\x22\x20class=\x22ink-fullscreen-button\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22Full\x20screen\x22>fullscreen</button><button\x20id=\x22inks-overflow-menu-button\x22\x20class=\x22ink-overflow-menu-button\x20ink-no-propagation\x20material-icons-round\x20ink-tooltip\x22\x20aria-label=\x22More\x20settings\x22>settings</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-seekbar-progress\x22\x20class=\x22ink-range-container\x20ink-seek-bar-container\x22\x20style=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ink-ad-markers\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22inks-seekbar\x22\x20class=\x22ink-range-element\x20ink-seek-bar\x20ink-no-propagation\x20ink-show-controls-on-mouse-over\x22\x20type=\x22range\x22\x20step=\x22any\x22\x20min=\x220\x22\x20max=\x22100\x22\x20aria-label=\x22Seek\x22\x20value=\x220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-overflow-menu\x22\x20class=\x22ink-overflow-menu\x20ink-no-propagation\x20ink-show-controls-on-mouse-over\x20ink-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-resolution-button\x22\x20class=\x22ink-overflow-button\x20ink-resolution-button\x20ink-tooltip-status\x22\x20ink-status=\x22Auto\x22\x20aria-label=\x22Resolution\x22><i\x20class=\x22material-icons-round\x22>settings</i><label\x20class=\x22ink-overflow-button-label\x20ink-overflow-menu-only\x22><span>Resolution</span><span\x20id=\x22inks-current-selection-span\x22\x20class=\x22ink-current-selection-span\x22>Auto</span></label></button><button\x20id=\x22inks-playbackrate-button\x22\x20class=\x22ink-overflow-button\x20ink-playbackrate-button\x20ink-tooltip-status\x22\x20aria-label=\x22Playback\x20speed\x22\x20ink-status=\x221x\x22><i\x20class=\x22material-icons-round\x22>slow_motion_video</i><label\x20class=\x22ink-overflow-button-label\x20ink-overflow-menu-only\x22><span>Playback\x20speed</span><span\x20id=\x22inks-selected-playback-speed\x22\x20class=\x22ink-current-selection-span\x22>1x</span></label></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-resolutions\x22\x20class=\x22ink-no-propagation\x20ink-show-controls-on-mouse-over\x20ink-settings-menu\x20ink-hidden\x20ink-resolutions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-back-button\x22\x20class=\x22ink-back-to-overflow-button\x22\x20aria-label=\x22Resolution\x22><i\x20class=\x22material-icons-round\x22>arrow_back_ios_new</i><span>Resolution</span></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-720-button\x22\x20class=\x22explicit-resolution\x20res-option\x22>720p<i\x20id=\x22inks-res-selected-720\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-480-button\x22\x20class=\x22explicit-resolution\x20res-option\x22>480p<i\x20id=\x22inks-res-selected-480\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-240-button\x22\x20class=\x22explicit-resolution\x20res-option\x22>240p<i\x20id=\x22inks-res-selected-240\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-144-button\x22\x20class=\x22explicit-resolution\x20res-option\x22>144p<i\x20id=\x22inks-res-selected-144\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-res-auto-button\x22\x20class=\x22ink-enable-abr-button\x20res-option\x22\x20aria-selected=\x22true\x22><span\x20class=\x22ink-auto-span\x20ink-chosen-item\x22>Auto</span><i\x20id=\x22inks-res-selected-auto\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x22\x20aria-hidden=\x22true\x22>done</i></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-playbackrate\x22\x20class=\x22ink-no-propagation\x20ink-show-controls-on-mouse-over\x20ink-settings-menu\x20ink-hidden\x20ink-playback-rates\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-back-button\x22\x20class=\x22ink-back-to-overflow-button\x22\x20aria-label=\x22Back\x22><i\x20class=\x22material-icons-round\x22>arrow_back_ios_new</i><span>Playback\x20speed</span></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-050\x22><span>0.5x</span>\x20\x20<i\x20id=\x22inks-playbackrate-selected-050\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-075\x22><span>0.75x</span>\x20<i\x20id=\x22inks-playbackrate-selected-075\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-100\x22\x20aria-selected=\x22true\x22>\x20<span>1x</span>\x20<i\x20id=\x22inks-playbackrate-selected-100\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-125\x22\x20><span>1.25x</span>\x20<i\x20id=\x22inks-playbackrate-selected-125\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-150\x22\x20><span>1.5x</span>\x20<i\x20id=\x22inks-playbackrate-selected-150\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-175\x22\x20><span>1.75x</span>\x20<i\x20id=\x22inks-playbackrate-selected-175\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22inks-playbackrate-200\x22\x20><span>2x</span>\x20<i\x20id=\x22inks-playbackrate-selected-200\x22\x20class=\x22material-icons-round\x20ink-chosen-item\x20ink-hidden\x22\x20aria-hidden=\x22true\x22>done</i>\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-buffering-spinner-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22inks-buffering-spinner\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + Q) + yE(0x240);
    }
    [A(0x175)](p) {
        const yx = A;
        let T = '';
        const Q = yx(0x203)
          , s = Q[yx(0x229)];
        for (let K = 0x0; K < p; K++)
            T += Q[yx(0x1c0)](Math[yx(0x23d)](Math['random']() * s));
        return 'i' + T;
    }
    [A(0x1b0)](p) {
        const yV = A
          , T = function(H, R) {
            const yI = S;
            return R < 1e-7 ? H : T(R, Math[yI(0x23d)](H % R));
        };
        let Q = p
          , K = Q[yV(0x18d)]()['length'] - 0x2
          , C = Math[yV(0x151)](0xa, K)
          , O = Q * C
          , j = T(O, C);
        return O /= j,
        C /= j,
        {
            'width': Math['floor'](O),
            'height': Math['floor'](C)
        };
    }
}
function y() {
    const S4 = ['#inks-resolution-button', '_non_native_is_full_screen_active', '_setToMute', '.ink-range-container.ink-volume-bar-container', 'seekbar_init', '#inks-playbackrate-175', '#inks-res-240-button', '_setToPause', 'preventDefault', '_seekbar_range', 'value', '_requestChangeTime', 'ink-hidden', '_sendMessageToIframe', '_playbackspeed_075', 'parentNode', '_maintainControls', 'autoplay;\x20encrypted-media;\x20picture-in-picture\x20none', '#inks-res-selected-', '0px', '#inks-volume', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22inks-main-container\x22\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:0px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative\x20!important;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20direction:ltr\x20!important;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:pointer;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:100%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x20', '103776gsHoVS', '_controls_layer', 'declar_private_members', '#inks-current-selection-span', '<iframe\x20id=\x22', 'important', 'rewind', 'embed_init', '#inks-seekbar-progress', 'InkPlayerSrc', '#inks-resolutions', 'canplay', 'pow', '_hideBottomPanel', 'ended', 'webkitRequestFullscreen', 'player_callback', '#inks-controls-layer-y', 'postMessage', '_license', 'filter', 'target', '105YwtAcn', '#inks-playbackrate-050', 'flex', '_volume', 'stopPropagation', 'status', '_toggleBottomPanel', 'msExitFullscreen', '\x22\x20allow=\x22autoplay;\x20encrypted-media;\x20picture-in-picture\x20none\x22></iframe>', 'map', 'onmouseout', 'width', 'removeEventListener', '_default_aspect_ratio', '_toggleMute', '050', 'mozCancelFullScreen', 'setAdaptive', 'load', 'max', '1.75x', 'message', '_totalPlayedTime', 'remove', '#inks-playbackrate-button', 'container', '_generateId', '_rg17', '_setMainContainerStyleFullscreen', 'parentElement', 'ontouchstart', 'ondblclick', 'onmousemove', '_status', '175', '_replayBtn', 'volume_off', 'getiFrameID', '_is_native_full_screen', '_resolution_rates', '#inks-overflow-menu', 'querySelector', 'push', '#inks-replay-button', '_currentTime', 'cursor', 'unmute', '#inks-selected-playback-speed', 'getAspectRatio', 'pause', 'toString', '_api', '30nNBtYP', 'identifier', '_toggleMenu', '%)\x20repeat\x20scroll\x200%\x200%', 'paddingTop', 'seeking', '_updatePlayerProperties', '_requestForward', '_initializeControls', '428026nrHLRX', 'z-index', 'top', '_generateIframeHTML', 'allowfullscreen', '0.75x', '_rgch_wt', '_duration', 'playing', '_padding_top_for_aspect_ratio', '_isAdaptive', 'setPlaybackRate', 'background', '_playBtn', 'buffering_end', 'source', '_checkSec200', 'position', 'native_fullscreen', '_statusText', 'getIsBuffering', '_is_playing', 'none', '_muteBtn', '_decimalToAspectRatio', 'insertAdjacentHTML', '_mouse_move_timeout_seconds', 'auto', '_goFullScreen', 'setVolume', '#inks-mute-button', '_updateSeekBarInfo', '_menu_playback_btn', '_menu_res_480_btn', 'beforeend', '_setMainContainerStyleExitFullscreen', '#inks-scrim', '_container', '_config', '_setVolume', 'charAt', '_muted', '_emit', 'onInkryptAPIReady', 'children', 'player_code', '_ifr_still_active_check', '66.6666666667%', '_mouse_move_timeout', 'seamless', '_destroy_callback', 'onclick', 'name', 'click', '_playback_rates', 'location', '_setObserver', 'addEventListener', 'parent', '%,\x20rgb(255,\x200,\x200)\x20', 'getObjects', '#inks-playbackrate-200', 'hls', '_menu_res_btn', 'current_time', '100', 'getTotalPlayedTime', '_menu_res_144_btn', '_aspectRatio', '_is_video_buffering', 'classList', 'display', '_menu_res_back_btn', 'buffering_start', 'loaded', '_isBigPlayButtonVisible', '_menu_res_240_btn', '_control_bottom_panel', 'rgba(0,\x200,\x200,\x200)\x20linear-gradient(to\x20right,\x20rgb(255,\x200,\x200)\x20', '#inks-res-720-button', 'text', 'mozRequestFullScreen', 'body', '_playbackspeed_050', 'forEach', '#inks-overflow-menu-button', '_bigPlayBtn', 'height', 'api', '1267815qvPjdb', '#inks-bottom-controls', 'video_id', 'getCurrentTime', 'license', 'volume', 'innerHTML', 'fullscreenchange', 'exitFullscreen', 'type', 'loadstart', 'player_properties', '_playbackspeed_150', '\x22\x20src=\x22', 'currentScript', '_otp', 'ink.js', 'inks', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', '#inks-playbackrate', 'player', '#inks-res-back-button', '_buffering_spinner', '_changePlaybackRate', '#inks-controls-container', '_secondsToHHMMSS', 'add', '#inks-res-auto-button', 'keys', '#inks-res-480-button', '_playbackRate', 'bind', '_isTouchDevice', 'getVolume', 'onchange', '_menu_res_auto_btn', '1182lKqjri', 'data', 'display:\x20block\x20!important;visibility:visible\x20!important;\x20z-index:3\x20!important;\x20left:\x200px\x20!important;right:\x200px\x20!important;position:\x20absolute\x20!important;top:\x200px\x20!important;width:\x20100%\x20!important;height:\x20100%\x20!important;', '\x20/\x20', '_playbackspeed_100', '#id=', 'playback_rate', '#inks-current-time', 'contains', 'volumechange', 'disconnect', 'relative', 'msRequestFullscreen', 'event', '_iframe_name', 'function', '_is_full_Screen', 'play', '_video_id', 'about:blank', 'length', '%,\x20rgba(255,\x20255,\x20255,\x200.4)\x20', 'mute', '_playbackspeed_125', 'getPlaybackRate', '_playbackspeed_175', '1.5x', 'iFrameRequest', '#inks-playbackrate-back-button', '_setToUnmute', '1360hCaoyz', '_menu_res_720_btn', 'onmouseover', 'display:\x20block\x20!important;visibility:visible\x20!important;\x20z-index:2\x20!important;\x20left:\x200px\x20!important;right:\x200px\x20!important;position:\x20absolute\x20!important;top:\x200px\x20!important;width:\x20100%\x20!important;height:\x20100%\x20!important;', 'observer', 'play_arrow', '_sendMessageToIframeWithoutValidation', '_hideMenu', '#inks-small-play-button', '_changeQuality', 'floor', '_registerCheater', '#inks-buffering-spinner-container', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '_main_iframe', 'webkitExitFullscreen', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '_setAspectRatio', '_setToPlay', 'emb/index.html', '_requestRewind', 'mode', '_handlePlayerEvent', '#inks-playbackrate-selected-', '330Kjxgnj', 'fullscreenElement', 'seekbar_change', '_playbackspeed_200', '1592667VxKEjW', 'true', 'volume_up', 'defineProperty', '_events', 'toggle', 'setAttribute', '075', 'setProperty', '#inks-forward-button', '222607KDSCMT', 'block', '#inks-controls-layer-x', 'style', 'ctime', 'src', 'getStatusText', 'getDuration', '#inks-playbackrate-100', '_volume_range', 'quality', 'config', '_setPlayer', 'zIndex', '_fullscreen_btn', 'replace', 'left', '_player_initialized', '#inks-main-container', '#inks-seekbar', 'getStatus', '_maintainFrame', 'setCurrentTime', 'observe', 'unset', 'inks-hidden', '8yqCojP', '_menuBtn'];
    y = function() {
        return S4;
    }
    ;
    return y();
}
inkrypt['b'] = [],
inkrypt[A(0x1d4)] = function() {
    return this['b'];
}
;
if (inkrypt['a'])
    for (var i = 0x0; i < inkrypt['a'][A(0x229)]; i++) {
        inkrypt_load_player(inkrypt['a'][i]),
        inkrypt['a'][i][A(0x1e2)] = !0x0;
    }
else
    inkrypt['a'] = [];
Object[A(0x252)](inkrypt['a'], A(0x185), {
    'value': function(...p) {
        const S0 = A;
        let T = p[0x0];
        inkrypt_load_player(T),
        T[S0(0x1e2)] = !0x0;
    }
});
function inkrypt_load_player(p) {
    const S3 = A;
    if (p['loaded'])
        return;
    let T = new InkPlayer(p,function(Q) {
        const S1 = S;
        inkrypt['b'] = inkrypt['b'][S1(0x159)](function(s) {
            const S2 = S1;
            return s[S2(0x180)]() !== Q;
        });
    }
    );
    inkrypt['b'][S3(0x185)](T);
}
A(0x224) == typeof window[A(0x1c3)] && window['onInkryptAPIReady']();
