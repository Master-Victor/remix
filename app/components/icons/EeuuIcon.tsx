type EeuuIconProps = {
  width?: string;
  height?: string;
};

const EeuuIcon = (props: EeuuIconProps) => {
  const { width, height } = props;
  return (
    <div
      style={{
        display: "inline-block",
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "100%"}
        height={height || "100%"}
        viewBox="0 0 5000.000000 2638.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,2638.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M0 19263 l0 -7116 14963 6 c8229 4 19469 7 24977 7 l10015 0 0 1027
0 1028 -15000 5 -15000 5 -3 993 -2 992 15002 0 15003 0 -2 1032 -3 1033
-15000 3 -15000 2 0 990 0 990 15003 0 15002 0 -2 1032 -3 1033 -15000 3
-15000 2 0 990 0 990 14998 0 c8249 0 15001 2 15003 4 2 2 3 468 1 1035 l-2
1031 -24975 0 -24975 0 0 -7117z m1796 6275 l88 -278 299 0 c173 0 297 -4 295
-9 -1 -5 -109 -87 -238 -181 -129 -95 -236 -173 -237 -174 -1 -1 20 -69 47
-151 26 -83 69 -212 93 -288 30 -90 41 -137 32 -133 -7 2 -118 81 -245 175
l-232 171 -32 -22 c-17 -12 -125 -92 -239 -176 -115 -84 -211 -151 -213 -149
-3 2 36 132 87 288 l91 283 -24 17 c-12 10 -121 89 -240 176 -119 87 -217 161
-217 166 -1 4 134 7 299 7 l299 0 76 238 c42 130 83 259 92 285 8 27 19 45 23
40 4 -4 47 -133 96 -285z m3289 0 l89 -278 298 0 c164 0 298 -3 298 -7 0 -5
-102 -82 -225 -173 -124 -91 -232 -170 -240 -176 -11 -9 1 -55 76 -289 49
-153 88 -282 87 -287 -2 -5 -111 70 -242 166 -132 97 -244 172 -250 169 -6 -4
-114 -83 -240 -176 -125 -92 -230 -166 -233 -164 -2 3 34 124 80 268 46 145
87 273 91 284 5 17 -30 46 -234 195 -131 96 -239 178 -240 183 0 4 135 7 300
7 l299 0 26 83 c105 333 158 488 164 481 4 -5 47 -134 96 -286z m3310 210 c14
-46 55 -174 91 -285 l65 -203 300 0 c164 0 299 -3 298 -7 0 -5 -108 -87 -240
-183 -131 -96 -239 -176 -239 -177 0 -2 41 -130 91 -284 49 -155 88 -283 86
-286 -3 -2 -99 65 -213 149 -115 84 -223 163 -240 175 l-31 22 -233 -170
c-128 -94 -239 -173 -246 -176 -10 -4 -11 1 -3 24 22 60 178 548 176 549 -1 1
-108 79 -237 174 -129 94 -236 176 -238 181 -2 5 121 9 295 9 l299 0 89 278
c90 284 93 292 100 292 2 0 16 -37 30 -82z m3360 -155 c42 -131 83 -259 91
-285 l16 -48 299 0 c164 0 299 -3 299 -7 0 -5 -109 -87 -240 -183 -132 -96
-239 -179 -237 -185 28 -76 177 -558 174 -561 -2 -3 -109 73 -238 167 -129 95
-238 172 -244 172 -5 0 -116 -77 -245 -172 -129 -95 -236 -168 -237 -164 -2 5
37 134 87 288 83 260 89 281 72 293 -299 217 -461 339 -462 345 0 4 134 7 298
7 l298 0 93 285 c50 157 94 285 96 285 2 0 38 -107 80 -237z m3330 -55 l89
-278 298 0 c164 0 298 -3 298 -7 0 -5 -102 -82 -226 -173 -123 -91 -231 -170
-239 -176 -12 -9 0 -55 76 -289 49 -153 88 -282 87 -287 -2 -5 -109 68 -238
163 -129 95 -239 172 -245 172 -6 0 -115 -77 -244 -172 -128 -95 -235 -170
-238 -167 -3 2 33 123 80 268 47 145 87 272 91 283 5 18 -30 46 -234 195 -131
96 -239 178 -240 183 0 4 135 7 299 7 l299 0 21 63 c11 34 52 163 91 286 40
123 75 219 79 215 4 -5 47 -134 96 -286z m3299 245 c8 -27 49 -155 91 -285
l76 -238 300 0 c164 0 299 -3 298 -7 0 -5 -108 -87 -240 -183 -131 -96 -239
-176 -239 -179 0 -2 41 -130 91 -283 50 -154 88 -282 86 -285 -3 -2 -99 65
-213 149 -115 84 -223 163 -240 175 l-31 22 -233 -170 c-128 -94 -238 -173
-245 -176 -8 -2 27 118 81 283 51 159 92 289 91 290 -1 1 -108 79 -237 174
-129 94 -236 176 -238 181 -2 5 121 9 295 9 l299 0 89 278 c89 281 93 292 100
292 2 0 10 -21 19 -47z m-14995 -1545 c23 -73 63 -200 90 -283 l49 -150 304
-5 303 -5 -115 -85 c-63 -47 -172 -128 -242 -179 -71 -51 -128 -96 -128 -100
0 -3 41 -132 90 -286 49 -153 88 -281 85 -283 -2 -2 -111 76 -244 173 l-240
176 -238 -175 c-131 -97 -241 -176 -244 -176 -7 0 6 43 111 368 34 106 60 199
57 205 -3 7 -112 91 -243 187 l-239 175 302 3 c276 2 303 4 311 20 5 9 46 137
93 284 46 147 87 268 90 268 3 0 24 -60 48 -132z m3366 -105 c42 -131 84 -259
92 -285 l15 -48 299 0 c165 0 299 -3 299 -7 0 -5 -108 -87 -240 -183 -132 -96
-240 -175 -240 -176 0 0 41 -126 90 -280 50 -153 89 -283 87 -287 -1 -5 -108
69 -237 164 -129 95 -239 172 -245 172 -5 0 -116 -77 -245 -172 -129 -95 -236
-168 -237 -164 -2 5 37 134 87 288 83 260 89 281 72 293 -299 217 -461 339
-462 345 0 4 134 7 298 7 l298 0 93 285 c50 157 94 285 96 285 2 0 38 -107 80
-237z m3350 -52 l90 -281 305 -2 304 -3 -238 -174 c-131 -96 -240 -180 -243
-187 -4 -11 158 -539 174 -566 13 -23 -34 8 -251 168 -157 116 -242 172 -250
166 -93 -73 -469 -343 -472 -340 -2 2 37 130 86 284 49 153 90 282 90 285 0 4
-106 84 -235 178 -129 95 -237 176 -240 182 -4 5 108 9 294 9 l300 0 92 284
c51 157 95 283 99 281 3 -2 46 -130 95 -284z m3332 7 l90 -283 304 -5 304 -5
-115 -85 c-63 -47 -172 -128 -242 -179 -71 -51 -128 -96 -128 -100 0 -4 40
-133 90 -286 49 -154 87 -281 85 -283 -2 -2 -111 76 -243 173 l-241 176 -238
-175 c-131 -97 -241 -176 -244 -176 -7 0 6 43 110 366 33 105 61 195 61 202 0
6 -109 91 -242 189 l-242 178 304 3 305 3 90 284 c50 157 93 285 96 285 3 0
46 -127 96 -282z m3323 30 c45 -139 86 -268 91 -285 l11 -33 299 0 c164 0 299
-3 299 -7 -1 -5 -109 -87 -241 -183 -131 -96 -238 -179 -236 -185 29 -80 177
-558 174 -561 -2 -3 -109 73 -238 167 -129 95 -238 172 -244 172 -5 0 -115
-77 -244 -171 -129 -95 -236 -170 -239 -168 -3 4 149 494 174 561 2 6 -104 89
-236 185 -131 96 -239 178 -240 183 0 4 135 7 299 7 l300 0 6 23 c28 93 177
547 180 547 2 0 40 -114 85 -252z m-15016 -1275 c23 -70 64 -197 91 -280 l49
-153 298 0 c164 0 298 -4 298 -8 0 -7 -33 -33 -341 -260 l-137 -100 90 -279
c49 -153 92 -281 94 -285 17 -27 -43 12 -253 167 l-237 175 -30 -24 c-179
-136 -456 -334 -456 -326 0 9 50 166 152 478 17 52 26 97 22 101 -5 4 -114 84
-241 177 -128 93 -233 172 -233 177 0 4 135 7 300 7 l299 0 93 285 c50 156 94
283 96 280 3 -2 23 -62 46 -132z m3341 -158 c47 -148 88 -271 90 -273 1 -2
136 -3 299 -2 163 0 296 -3 296 -8 0 -5 -449 -341 -477 -357 -1 0 39 -128 88
-284 50 -155 89 -285 86 -287 -3 -3 -112 73 -243 170 l-239 175 -30 -23 c-212
-159 -447 -327 -451 -323 -3 3 36 132 86 287 50 155 90 283 88 285 -2 1 -109
80 -238 174 -129 95 -236 177 -238 182 -2 5 119 9 297 9 l300 0 65 203 c36
111 77 240 91 286 18 57 30 80 35 70 4 -8 47 -135 95 -284z m3380 -7 l86 -268
300 0 c176 0 299 -4 297 -9 -1 -5 -109 -87 -238 -181 -129 -95 -236 -174 -238
-175 -2 -2 35 -122 82 -267 46 -144 88 -276 92 -291 6 -25 -23 -7 -227 144
-129 94 -239 175 -244 180 -7 5 -107 -63 -249 -167 -131 -96 -241 -173 -243
-170 -3 3 34 128 82 278 48 150 88 277 89 282 0 5 -105 87 -234 183 -129 95
-237 178 -238 184 -3 6 99 9 295 9 l298 -1 83 258 c46 142 88 271 95 287 14
36 4 59 112 -276z m3285 80 c40 -122 81 -251 91 -285 l20 -63 300 0 c185 0
299 -4 297 -9 -1 -6 -109 -87 -238 -182 -129 -94 -236 -173 -238 -174 -1 -1 4
-22 12 -46 81 -244 167 -522 163 -526 -4 -3 -347 242 -472 338 -6 4 -114 -69
-249 -167 -131 -97 -240 -173 -243 -170 -2 2 36 132 86 287 50 156 87 286 82
289 -58 37 -471 346 -471 352 0 4 135 8 299 8 l299 0 16 48 c131 411 168 522
171 522 1 0 35 -100 75 -222z m3324 -40 c46 -145 87 -273 91 -285 l6 -23 300
0 c164 0 299 -4 299 -8 0 -5 -454 -345 -477 -357 -1 0 39 -128 88 -284 50
-155 89 -285 86 -287 -3 -3 -112 73 -243 170 l-239 175 -30 -23 c-177 -134
-448 -327 -451 -323 -3 3 36 132 86 287 50 155 90 284 88 285 -2 1 -109 80
-238 174 -129 95 -236 176 -238 182 -2 5 112 9 296 9 l301 0 71 222 c40 123
81 251 91 285 11 35 22 63 24 63 2 0 42 -118 89 -262z m3305 230 c5 -18 46
-147 91 -285 l81 -253 300 0 c176 0 299 -4 297 -9 -1 -5 -109 -87 -238 -181
-129 -95 -236 -174 -238 -175 -2 -2 37 -130 88 -285 50 -156 89 -285 86 -287
-3 -3 -105 68 -227 158 -123 90 -230 169 -239 176 -14 10 -55 -17 -254 -163
-131 -96 -241 -173 -243 -170 -3 3 34 128 82 278 48 150 88 277 89 282 0 5
-105 87 -234 183 -129 95 -236 178 -238 183 -2 6 106 10 295 10 l299 0 88 273
c48 149 89 278 91 285 7 19 13 14 24 -20z m-14914 -1800 l67 -208 297 -2 298
-3 -239 -174 c-131 -96 -238 -178 -238 -182 0 -4 41 -133 90 -287 50 -154 90
-282 90 -286 0 -3 -33 18 -72 47 -40 30 -150 110 -245 180 l-171 126 -244
-179 c-134 -98 -244 -177 -245 -176 -1 1 38 127 87 281 50 153 90 284 90 291
0 7 -107 90 -237 186 l-237 173 298 5 299 5 87 271 c48 149 90 280 95 290 8
21 14 5 130 -358z m3290 135 c41 -131 84 -260 93 -288 l17 -50 298 -5 297 -5
-232 -170 c-127 -93 -235 -173 -240 -176 -5 -3 32 -133 82 -288 50 -156 89
-285 86 -288 -3 -3 -348 243 -471 338 -6 4 -114 -69 -249 -167 -131 -97 -240
-173 -243 -171 -5 5 3 31 111 366 36 113 62 207 57 210 -5 3 -113 83 -240 176
l-232 170 298 5 298 5 17 50 c9 28 51 157 93 288 42 130 78 237 80 237 2 0 38
-107 80 -237z m3351 -56 l90 -282 299 -5 298 -5 -237 -174 c-217 -160 -237
-177 -233 -200 2 -14 43 -145 90 -291 47 -145 85 -265 84 -266 -1 -1 -112 78
-246 176 l-244 179 -71 -53 c-289 -214 -416 -305 -416 -299 0 3 41 133 90 287
50 155 90 284 90 287 0 2 -108 83 -239 179 l-239 175 298 3 298 2 62 193 c116
364 124 386 130 381 3 -3 46 -132 96 -287z m3354 -64 l72 -223 297 -2 298 -3
-239 -175 c-131 -96 -238 -178 -238 -181 0 -4 41 -133 90 -287 50 -154 90
-283 90 -286 0 -4 -24 11 -52 32 -29 21 -139 102 -245 180 l-192 141 -243
-179 c-134 -98 -244 -177 -245 -176 -1 1 38 128 87 281 50 153 90 284 90 291
0 6 -107 90 -237 185 l-237 174 298 5 298 5 87 270 c48 149 91 279 95 290 9
23 7 28 126 -342z m3310 72 c45 -143 86 -268 91 -277 9 -16 36 -18 305 -20
l295 -3 -232 -170 c-128 -93 -236 -173 -241 -176 -8 -5 20 -98 144 -477 16
-51 28 -96 25 -98 -4 -4 -329 228 -472 337 -6 4 -115 -69 -249 -167 -131 -97
-240 -173 -243 -170 -2 2 36 131 86 287 83 260 89 283 73 295 -105 74 -458
337 -460 342 -1 4 131 6 293 4 l295 -3 10 23 c5 13 48 144 96 292 54 169 89
264 94 255 4 -8 45 -131 90 -274z m-14976 -1397 l91 -283 300 -5 300 -5 -241
-177 -242 -178 59 -182 c98 -303 127 -398 124 -398 -2 0 -109 77 -237 172
-128 94 -239 173 -248 174 -8 2 -121 -75 -250 -170 -129 -96 -237 -173 -238
-171 -2 2 37 133 88 290 50 158 90 288 88 289 -2 1 -110 81 -241 177 l-238
174 299 3 299 2 57 178 c116 360 130 401 134 397 3 -3 46 -132 96 -287z m3286
7 c46 -143 87 -268 92 -277 8 -16 35 -18 306 -20 l296 -3 -224 -164 c-124 -90
-232 -171 -241 -180 -15 -15 -15 -22 11 -101 15 -47 57 -176 93 -287 35 -112
63 -203 61 -203 -2 0 -108 77 -236 172 -128 94 -240 173 -248 174 -8 2 -121
-74 -250 -170 -129 -95 -236 -170 -238 -166 -1 4 38 133 87 285 50 153 88 282
85 286 -2 5 -111 86 -241 181 l-236 173 300 3 299 2 41 128 c23 70 65 201 94
290 31 98 55 158 59 150 5 -7 45 -130 90 -273z m3385 -17 l89 -278 299 -2 299
-3 -239 -174 c-131 -96 -239 -176 -241 -177 -2 -1 38 -131 88 -289 51 -157 91
-288 89 -290 -2 -1 -110 75 -239 171 -129 96 -242 172 -250 170 -9 -1 -121
-80 -249 -175 -128 -95 -234 -171 -236 -169 -1 2 40 131 90 288 85 262 91 286
76 301 -9 9 -117 90 -241 180 l-224 164 297 3 c297 2 298 2 307 25 5 12 48
143 96 291 51 161 89 264 93 255 4 -8 47 -139 96 -291z m3310 0 l89 -278 300
-2 299 -3 -236 -173 c-130 -95 -239 -177 -241 -181 -3 -4 35 -131 85 -282 49
-151 88 -279 86 -285 -1 -6 -108 67 -237 162 -129 96 -239 174 -245 174 -5 0
-117 -79 -247 -175 -131 -96 -238 -169 -238 -162 0 7 40 136 89 287 49 151 87
278 85 282 -2 3 -111 84 -241 180 l-237 173 299 5 300 5 22 65 c12 36 54 166
94 289 43 136 74 219 79 210 4 -8 47 -139 95 -291z m3305 17 c46 -143 87 -268
92 -277 8 -16 35 -18 305 -20 l297 -3 -238 -174 c-130 -96 -239 -177 -240
-180 -2 -3 36 -130 85 -281 49 -151 89 -280 89 -287 0 -7 -107 66 -237 162
-131 96 -242 175 -248 175 -5 0 -116 -79 -245 -174 -129 -95 -236 -170 -238
-166 -2 4 38 133 87 286 49 153 88 281 85 285 -2 5 -111 86 -241 181 l-236
173 299 3 300 2 41 128 c23 70 65 201 94 290 31 98 55 158 59 150 4 -7 45
-130 90 -273z m3773 -297 l299 -3 -239 -174 c-131 -96 -239 -176 -241 -177 -2
-1 38 -131 88 -289 51 -157 90 -288 88 -290 -1 -2 -109 75 -238 171 -129 96
-242 172 -250 170 -9 -1 -120 -80 -248 -174 -128 -95 -235 -172 -236 -172 -4
0 16 64 133 428 l49 152 -241 178 -241 177 294 3 c162 1 298 6 302 10 4 4 46
129 93 277 47 149 89 277 92 285 3 8 49 -117 101 -277 l96 -293 299 -2z
m-15398 -1220 l76 -238 299 -2 299 -3 -239 -175 c-132 -96 -240 -179 -240
-183 0 -4 41 -134 91 -288 49 -155 89 -282 87 -284 -2 -2 -110 75 -240 171
-131 96 -241 174 -246 174 -5 0 -117 -79 -248 -175 -131 -96 -239 -173 -240
-172 -2 1 37 128 87 281 49 153 89 283 89 290 0 7 -107 91 -238 187 l-239 174
301 5 300 5 88 275 c48 151 91 282 94 290 7 17 7 17 119 -332z m3320 40 l89
-278 299 -2 300 -3 -236 -173 c-130 -95 -239 -177 -241 -181 -3 -4 35 -131 85
-282 49 -151 88 -279 86 -285 -1 -6 -108 67 -237 163 -129 95 -239 173 -245
173 -5 0 -117 -79 -247 -175 -131 -96 -238 -169 -238 -162 0 7 40 136 89 287
49 151 87 278 85 281 -2 4 -110 85 -240 180 l-237 174 300 3 299 2 18 58 c86
277 170 522 176 511 4 -8 47 -139 95 -291z m3330 9 l91 -282 299 -5 300 -5
-75 -55 c-41 -31 -150 -111 -241 -178 l-167 -122 94 -287 c51 -158 92 -289 90
-290 -1 -1 -110 76 -241 172 -131 96 -243 175 -249 175 -6 -1 -117 -79 -246
-175 -129 -95 -236 -172 -238 -170 -2 2 38 132 89 290 56 174 88 290 82 293
-5 4 -114 84 -242 177 l-232 170 300 3 299 2 67 208 c36 114 78 244 93 289 14
45 28 80 31 77 4 -3 47 -132 96 -287z m3350 -49 l76 -238 299 -2 299 -3 -239
-175 c-132 -96 -240 -179 -240 -184 0 -5 41 -134 91 -288 50 -154 89 -281 87
-283 -2 -2 -110 75 -240 171 -131 96 -242 174 -247 174 -5 0 -116 -79 -247
-175 -131 -96 -239 -173 -240 -172 -3 3 174 555 181 567 3 5 -105 89 -239 187
l-243 178 300 5 300 5 88 273 c48 150 90 280 94 290 8 19 5 29 120 -330z
m3285 146 c34 -104 76 -233 93 -286 l31 -98 299 -2 299 -3 -236 -173 c-130
-96 -238 -177 -240 -181 -3 -4 35 -131 85 -282 49 -151 88 -279 86 -285 -1 -6
-108 67 -237 163 -129 95 -242 172 -250 170 -8 -2 -120 -81 -247 -175 -128
-95 -233 -166 -233 -159 0 6 40 136 89 287 49 151 87 278 85 282 -2 3 -111 84
-241 180 l-237 173 300 3 300 2 23 73 c96 303 164 508 167 505 2 -2 31 -89 64
-194z m-14944 -1494 l89 -280 302 -2 301 -3 -243 -178 -243 -178 55 -172 c31
-95 72 -225 93 -289 21 -65 36 -118 34 -118 -3 0 -112 79 -243 175 -131 96
-241 175 -244 175 -4 0 -113 -79 -244 -174 -130 -96 -239 -173 -241 -172 -2 2
38 131 87 287 87 269 90 284 74 300 -10 9 -119 90 -243 180 l-224 164 301 3
301 2 62 193 c34 105 75 236 93 289 17 54 34 93 37 88 4 -6 47 -136 96 -290z
m3262 83 c39 -120 80 -251 93 -290 l23 -73 299 0 c164 0 296 -4 293 -8 -3 -5
-111 -86 -240 -181 l-235 -172 15 -47 c7 -26 49 -156 93 -289 43 -134 76 -243
74 -243 -3 0 -113 79 -244 176 -132 97 -245 173 -252 170 -7 -2 -115 -81 -242
-175 -126 -93 -231 -168 -233 -166 -3 3 154 508 175 561 2 7 -105 92 -239 190
l-243 179 301 3 300 2 94 290 c52 160 95 290 96 290 1 0 34 -98 72 -217z
m3438 -185 l57 -178 300 -2 301 -3 -243 -179 c-133 -98 -240 -183 -238 -190
24 -66 178 -559 175 -561 -2 -2 -110 75 -241 170 -130 96 -240 175 -243 175
-4 0 -114 -79 -246 -176 -132 -97 -241 -174 -242 -173 -2 2 24 85 56 184 32
99 73 228 92 287 l34 107 -234 171 c-129 95 -236 176 -240 181 -3 5 115 9 293
9 l299 0 23 73 c13 39 55 171 93 292 l71 220 38 -115 c21 -63 63 -195 95 -292z
m3279 100 l89 -278 300 -2 301 -3 -243 -179 c-134 -98 -241 -184 -239 -190 21
-55 177 -551 175 -557 -2 -4 -106 69 -233 162 -126 94 -235 173 -242 175 -7 3
-120 -73 -251 -170 -132 -97 -242 -176 -244 -176 -3 0 37 129 88 288 52 158
94 288 94 289 0 1 -100 74 -222 164 -123 89 -232 170 -243 181 -19 18 -12 18
281 18 l300 0 31 98 c18 53 60 184 94 291 35 108 65 187 69 180 3 -8 46 -139
95 -291z m3311 0 l88 -278 299 0 c164 0 296 -4 293 -8 -3 -5 -111 -87 -241
-182 -179 -131 -235 -177 -230 -189 21 -55 181 -561 178 -561 -3 0 -112 79
-243 175 -131 96 -241 175 -244 175 -3 0 -113 -78 -243 -174 -131 -96 -239
-173 -241 -171 -2 2 3 25 11 52 17 56 158 493 164 509 2 7 -105 92 -239 190
l-243 179 301 3 300 2 94 290 c52 160 97 285 101 278 3 -7 46 -138 95 -290z
m3404 -85 l62 -193 301 -2 301 -3 -224 -164 c-124 -90 -233 -172 -242 -180
-17 -15 -13 -32 72 -296 49 -154 89 -283 87 -287 -1 -4 -109 71 -240 167 -130
96 -240 175 -243 175 -3 0 -113 -79 -245 -175 -131 -96 -240 -175 -243 -175
-2 0 19 69 46 153 27 83 68 214 92 289 l44 137 -234 171 c-129 95 -237 176
-240 181 -3 5 121 9 293 9 l299 0 23 73 c12 39 54 171 93 292 l71 220 33 -100
c18 -55 61 -187 94 -292z m-11715 -1375 l89 -278 300 -2 301 -3 -243 -179
c-134 -98 -241 -184 -239 -190 23 -59 177 -550 175 -556 -2 -5 -110 70 -241
167 -131 96 -244 172 -250 170 -7 -3 -115 -82 -242 -175 -126 -94 -231 -166
-233 -162 -2 7 151 493 175 556 2 6 -105 92 -239 190 l-243 179 300 3 301 2
31 98 c18 53 60 184 94 291 35 108 65 187 69 180 3 -8 46 -139 95 -291z m3329
10 l92 -283 302 -5 301 -5 -243 -178 -243 -179 75 -231 c104 -320 110 -342
107 -345 -1 -2 -108 74 -236 169 -129 94 -239 173 -245 176 -6 2 -119 -75
-250 -171 -131 -97 -239 -174 -242 -172 -2 2 38 130 88 285 50 155 88 285 85
291 -3 5 -112 87 -242 182 l-236 173 301 3 301 2 75 233 c41 127 82 258 92
289 10 32 20 56 22 53 3 -3 46 -132 96 -287z m3341 -20 l86 -268 300 -2 301
-3 -236 -173 c-129 -95 -238 -177 -241 -182 -5 -8 71 -256 161 -529 8 -24 13
-45 11 -47 -2 -2 -111 75 -242 172 -131 96 -244 173 -251 170 -6 -2 -116 -81
-244 -176 -128 -94 -234 -169 -236 -168 -2 2 39 133 90 290 l93 286 -243 179
-244 178 302 5 302 5 87 270 c48 149 90 279 94 290 8 24 -3 54 110 -297z
m3330 10 l89 -278 300 -2 301 -3 -243 -179 c-134 -98 -241 -184 -239 -190 21
-55 177 -551 175 -557 -2 -4 -110 71 -241 168 -131 96 -244 172 -250 170 -7
-3 -115 -82 -242 -175 -126 -94 -231 -166 -233 -162 -3 7 150 490 174 555 3 7
-84 77 -218 175 -123 90 -232 171 -243 182 -19 18 -12 18 281 18 l300 0 36
113 c20 61 62 192 94 291 32 101 60 173 64 165 3 -8 46 -139 95 -291z m-13418
260 c6 -18 48 -147 93 -285 l81 -253 301 -2 300 -3 -240 -175 c-132 -96 -241
-179 -241 -184 -1 -5 40 -135 89 -289 50 -154 89 -281 87 -283 -2 -2 -111 75
-242 172 -131 96 -243 173 -250 170 -6 -2 -116 -81 -244 -176 -128 -94 -235
-170 -237 -168 -1 2 37 127 86 278 50 151 90 282 90 290 0 8 -108 94 -240 190
l-239 175 301 5 302 5 72 225 c40 124 81 251 90 283 10 31 21 57 24 57 3 0 11
-15 17 -32z m-1562 -1647 l90 -281 303 -2 304 -3 -245 -179 -244 -179 33 -106
c19 -58 60 -188 93 -288 32 -101 56 -183 52 -183 -3 0 -113 79 -244 176 -145
106 -243 172 -250 167 -7 -4 -115 -83 -241 -175 -126 -93 -231 -166 -233 -164
-2 2 35 125 83 272 47 148 88 276 91 285 3 11 -62 65 -231 188 -130 95 -239
177 -242 182 -3 5 119 9 295 9 l300 0 76 238 c42 130 83 258 91 285 9 26 19
45 23 43 3 -3 47 -131 96 -285z m3290 -3 l89 -278 298 0 c164 0 298 -3 297 -7
0 -5 -108 -87 -240 -183 -132 -96 -238 -179 -235 -185 2 -6 43 -132 91 -280
47 -148 88 -272 91 -277 15 -24 -33 8 -250 168 -224 164 -239 174 -260 161
-11 -8 -120 -87 -240 -176 -121 -88 -221 -159 -223 -157 -3 3 148 492 174 562
2 6 -104 89 -236 185 -132 96 -240 177 -240 182 -1 4 134 7 298 7 l299 0 11
33 c95 303 174 537 180 531 4 -5 48 -134 96 -286z m3315 195 c17 -54 58 -182
91 -285 l60 -188 300 0 c170 0 298 -4 295 -9 -3 -5 -112 -86 -241 -181 -205
-150 -235 -176 -229 -194 4 -12 45 -140 91 -284 47 -145 83 -266 80 -268 -2
-2 -91 60 -198 139 -107 78 -215 157 -240 176 l-47 33 -238 -176 c-132 -97
-242 -176 -245 -176 -5 0 150 494 175 560 5 11 -62 65 -239 195 l-246 180 304
3 303 2 23 73 c30 95 150 468 156 485 2 6 7 12 9 12 3 0 19 -44 36 -97z m3360
-155 c45 -139 87 -268 93 -285 l11 -33 298 0 c164 0 298 -3 297 -7 0 -5 -98
-79 -217 -166 -119 -87 -227 -165 -239 -175 l-23 -17 90 -280 c50 -154 89
-283 88 -287 -2 -5 -110 70 -242 167 -131 96 -240 175 -241 175 -2 0 -111 -79
-242 -175 -131 -97 -239 -172 -241 -167 -2 6 151 496 173 555 4 8 -85 78 -234
187 -132 96 -240 178 -240 183 -1 4 133 7 297 7 l298 0 92 285 c51 157 95 285
97 285 2 0 41 -114 85 -252z m3325 -40 l89 -278 298 0 c164 0 298 -3 298 -7
-1 -5 -109 -87 -241 -183 -132 -96 -238 -179 -236 -185 25 -64 177 -549 175
-555 -2 -5 -110 69 -242 166 -224 165 -239 174 -260 161 -11 -8 -120 -87 -240
-176 -121 -88 -222 -159 -224 -156 -2 2 5 32 16 67 126 387 161 501 157 507
-2 3 -110 83 -239 176 -129 94 -235 173 -235 178 -1 4 134 7 298 7 l299 0 11
33 c95 304 175 537 180 530 4 -4 48 -133 96 -285z m3349 90 c36 -112 77 -240
91 -285 l26 -83 300 0 c176 0 298 -4 295 -9 -3 -5 -112 -87 -241 -181 -206
-151 -235 -175 -229 -194 3 -11 44 -140 91 -284 46 -145 83 -266 80 -268 -2
-2 -107 72 -233 164 -126 92 -234 171 -241 175 -7 5 -105 -61 -250 -167 -131
-97 -241 -176 -244 -176 -4 0 29 109 72 243 44 133 85 263 93 288 l14 46 -244
179 -245 179 304 3 303 2 84 263 c93 294 98 307 104 307 3 0 34 -91 70 -202z"
          />
          <path
            d="M2 9138 l3 -1033 24973 0 24972 0 3 1033 2 1032 -24978 0 -24977 0 2
-1032z"
          />
          <path
            d="M0 5085 l0 -1035 24975 2 24975 3 0 1030 0 1030 -24975 3 -24975 2 0
-1035z"
          />
          <path
            d="M0 1035 l0 -1035 24975 0 24975 0 2 1031 c2 567 1 1033 -1 1035 -2 2
-11242 4 -24978 4 l-24973 0 0 -1035z"
          />
        </g>
      </svg>
    </div>
  );
};

export default EeuuIcon;