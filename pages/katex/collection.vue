<template>
  <div style="padding: 30px">
    <v-alert dense type="info" class="bold"></v-alert>
    <div v-katex:auto>
      $$ \begin{aligned} &\int \frac{1}{x(x+2)}dx \\&= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
      \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
      \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
    </div>

    <v-alert dense type="info" class="bold"></v-alert>

    <div v-katex>$$ x = a $$</div>
    <v-alert dense type="info" class="bold">行列</v-alert>
    <div v-katex>
      $$ \begin{aligned} A = \left( \begin{array}{cccc} a_{ 11 } & a_{ 12 } & \ldots & a_{ 1n } \\ a_{ 21 } & a_{ 22 } & \ldots &
      a_{ 2n } \\ \vdots & \vdots & \ddots & \vdots \\ a_{ m1 } & a_{ m2 } & \ldots & a_{ mn } \end{array} \right) \end{aligned}
      $$
    </div>

    <v-alert dense type="info" class="bold">行列</v-alert>
    <div v-katex>
      $$\begin{aligned} \begin{pmatrix} \lambda & 1 & & & 0 \\ & \lambda & 1 & & \\ & & \ddots & \ddots & \\ & & & \lambda & 1 \\
      0 & & & & \lambda \end{pmatrix} \end{aligned}$$
    </div>

    <v-alert dense type="info" class="bold">行列</v-alert>
    <div v-katex>
      $$ \begin{aligned} A = \left( \begin{array}{cccc} a_{ 11 } & a_{ 12 } & \ldots & a_{ 1n } \\ a_{ 21 } & a_{ 22 } & \ldots &
      a_{ 2n } \\ \vdots & \vdots & \ddots & \vdots \\ a_{ m1 } & a_{ m2 } & \ldots & a_{ mn } \end{array} \right) = \left(
      \begin{array}{cccccccccc} 1&0&0&0&0&0&0&0&0&0 \\ 0&1&0&0&0&0&0&0&0&0 \\ 0&0&1&0&0&0&0&0&0&0 \\ 0&0&0&1&0&0&0&0&0&0 \\
      0&0&0&0&1&0&0&0&0&0 \\ 0&0&0&0&0&1&0&0&0&0 \\ 0&0&0&0&0&0&1&0&0&0 \\ 0&0&0&0&0&0&0&1&0&0 \\ 0&0&0&0&0&0&0&0&1&0 \\
      0&0&0&0&0&0&0&0&0&1 \\ \end{array} \right) \end{aligned} $$
    </div>

    <!-- <v-alert dense type="info" class="bold">行列</v-alert>
        <div v-katex>
            $$ \begin{aligned} A = \left( \begin{array}{cccccccccc}
            1&0&0&0&0&0&0&0&0&0 \\ 0&1&0&0&0&0&0&0&0&0 \\ 0&0&1&0&0&0&0&0&0&0 \\
            0&0&0&1&0&0&0&0&0&0 \\ 0&0&0&0&1&0&0&0&0&0 \\ 0&0&0&0&0&1&0&0&0&0 \\
            0&0&0&0&0&0&1&0&0&0 \\ 0&0&0&0&0&0&0&1&0&0 \\ 0&0&0&0&0&0&0&0&1&0 \\
            0&0&0&0&0&0&0&0&0&1 \\ \end{array} \right) \end{aligned} $$
        </div> -->

    <v-alert dense type="info" class="bold">ベクトル</v-alert>
    <div v-katex>
      $$ \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{vmatrix} a & b \\ c
      & d \end{vmatrix} $$
    </div>

    <v-alert dense type="info" class="bold">ベクトル</v-alert>
    <div v-katex>
      $$ \left(\begin{array}{c}a \\ b \\ c\end{array}\right) =\left(\begin{array}{c}x_1\\ x_2 \\ x_3\end{array}\right)
      =\left(\begin{array}{c}y_1 \\ y_2 \\ y_3\end{array}\right) $$
    </div>

    <v-alert dense type="info" class="bold">ベクトル</v-alert>
    <div v-katex>
      $$ \left(\begin{array}{c}a \\ b \\ c\end{array}\right) =\left(\begin{array}{c}x_1\\ x_2 \\ x_3\end{array}\right)
      =\left(\begin{array}{c}y_1 \\ y_2 \\ y_3\end{array}\right) =\left(\begin{array}{c}z_1 \\ z_2 \\ z_3\end{array}\right) $$
    </div>

    <!-- <v-alert dense type="warning" class="bold">ベクトル</v-alert>
        <div v-katex>
            $$ \begin{aligned} A = X = Y = Z \\ \Leftrightarrow
            \left(\begin{array}{c}a \\ b \\ c\end{array}\right)
            =\left(\begin{array}{c}x_1\\ x_2 \\ x_3\end{array}\right)
            =\left(\begin{array}{c}y_1 \\ y_2 \\ y_3\end{array}\right)
            =\left(\begin{array}{c}z_1 \\ z_2 \\ z_3\end{array}\right)
            \end{aligned} $$
        </div> -->

    <v-alert dense type="warning" class="bold">ベクトル \underbrace</v-alert>
    <div v-katex>
      $$\begin{aligned} \boldsymbol{ 1 } =( \underbrace{ 1, 1, \ldots, 1 }_{ n } )^{ \mathrm{ T } } =\left( \begin{array}{c} 1 \\
      1 \\ \vdots \\ 1 \end{array} \right) \end{aligned}$$
    </div>

    <v-alert dense type="warning" class="bold">\overbrace</v-alert>
    <div v-katex style="overflow-x: auto">
      $$\sum_{ k = 1 }^{ n } k^2 = \overbrace{ 1^2 + 2^2 + \cdots + n^2 }^{ n } = \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 )$$
    </div>

    <v-alert dense type="info" class="bold"></v-alert>
    <div v-katex>
      $$ A\vec{v}= \left[ \begin{array}{cc} a_{11} & a_{12} & a_{13} \\ a_{21}& a_{22} & a_{23}\\ a_{31}& a_{32} & a_{33}
      \end{array} \right] \left[ \begin{array}{cc} v_1 \\ v_2 \\ v_3 \end{array} \right] = \left[ \begin{array}{cc} a_{11}v_1
      +a_{12}v_2+ a_{13}v_3 \\ a_{21}v_1+ a_{22}v_2 + a_{23}v_3\\ a_{31}v_1+ a_{32}v_2 + a_{33}v_3 \end{array} \right]$$
    </div>

    <v-alert dense type="error" class="bold"></v-alert>
    <div v-katex>
      $$ \begin{aligned} A\vec{v} = \left[ \begin{array}{cc} 2 & 0 \\1&2 \end{array} \right] \left[ \begin{array}{cc} 2 \\ 1
      \end{array} \right] &=& \left[ \begin{array}{cc} 2\cdot2+0\cdot1 \\ 1\cdot2+2\cdot1 \end{array} \right]\\ &=& \left[
      \begin{array}{cc} 4+0 \\ 2+2 \end{array} \right]\\ &=& \left[ \begin{array}{cc} 4 \\ 4 \end{array} \right] \end{aligned}$$
    </div>

    <v-alert dense type="info" class="bold">ε-δ論法</v-alert>
    <div v-katex>
      $$ \begin{aligned} & & {}^\forall \varepsilon \gt 0, {}^\exists \delta \gt 0 \text{ s.t. }\\ & & {}^\forall x \in \mathbb{ R
      }, 0 \lt |x - a| \lt \delta \implies |f(x) - b| \lt \varepsilon \end{aligned} $$
    </div>

    <v-alert dense type="info" class="bold">表 array</v-alert>
    <div v-katex>$$ \begin{array}{lllll} 0 & 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 & 9 \end{array} $$</div>

    <v-alert dense type="info" class="bold">表 array</v-alert>
    <div v-katex>$$ \begin{array}{|c|c|c|c|c|} \hline 0 & 1 & 2 & 3 & 4 \\ \hline 5 & 6 & 7 & 8 & 9 \\ \hline \end{array} $$</div>

    <v-alert dense type="info" class="bold">表 array</v-alert>
    <div v-katex>$$ \begin{array}{|c|c|} \hline a & a^{2}\\ \hline 11 & 121\\ 12 & 144\\ 13 & 169\\ \hline \end{array} $$</div>

    <v-alert dense type="info" class="bold">場合分け array</v-alert>
    <div v-katex>$$ f(x) = \left\{ \begin{array}{ll} 1 & (x \geq 0)\\ 0 & (x &lt; 0) \end{array} \right. $$</div>

    <v-alert dense type="info" class="bold">場合分け cases</v-alert>
    <div v-katex>$$ f(x) = \begin{cases} 1 & (x \geq 0)\\ 0 & (x &lt; 0) \end{cases} $$</div>

    <v-alert dense type="info" class="bold">場合分け cases</v-alert>
    <div v-katex>$$ |x| = \begin{cases} x & ( x \geqq 0 ) \\ -x & ( x \lt 0 ) \end{cases}$$</div>
    <v-alert dense type="info" class="bold">場合分け cases</v-alert>
    <div v-katex>
      $$ \int_0^\pi \sin{mx}\cos{nx} dx = \frac{1-(-1)^{m-n}}{m^2 - n^2} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2 -
      n^2} & ( m-n \in odd ) \end{cases} $$
    </div>

    <v-alert dense type="info" class="bold">場合分け cases</v-alert>
    <div v-katex>
      $$ \int_0^\pi \sin{mx}\cos{nx} dx = \frac{1-(-1)^{m-n}}{m^2 - n^2} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2 -
      n^2} & ( m-n \in odd ) \end{cases} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2 - n^2} & ( m-n \in odd )
      \end{cases} $$
    </div>

    <v-alert dense type="info" class="bold"></v-alert>
    <div v-katex>$$ $$</div>

    <v-alert dense type="info" class="bold">増減表</v-alert>
    <div v-katex>
      $$ \begin{array}{c|ccccc} x & \cdots & -1 & \cdots & 1 & \cdots \\ \hline f'(x) & + & 0 & - & 0 & + \\ \hline f(x) &
      \nearrow & e & \searrow & -e & \nearrow \end{array}$$
    </div>

    <v-alert dense type="info" class="bold">8行 同値変形 ⇔無し</v-alert>
    <div v-katex:auto>
      \[ \begin{aligned} 2x+6y+4(x+3y) &= 2(x+2y) \\ 2x+6y+4x+12y &= 2(x+2y) \\ 6x+18y &= 2(x+2y) \\ 6x+18y-18y &= 2x+4y-18y \\ 6x
      &= 2x-14y \\ 6x-2x &= 2x-2x-14y \\ 4x &= -14y \\ x &= \frac{-14y}{4} \end{aligned} \]
    </div>

    <v-alert dense type="info" class="bold mt-5 mb-0">4行 同値変形 ⇔有り</v-alert>
    <div v-katex>
      \[ \begin{aligned} &&3x^2+4x+6 &= 7x^2+12x+14 \\ \iff && 0 &= 4x^2+8x+8 \\ \iff && 0 &= x^2+2x+2 \\ \iff && 0 &= (x+1)^2
      \end{aligned} \]
    </div>

    <v-alert dense dark color="warning" class="bold mt-5 mb-0">等式変形</v-alert>
    <div v-katex>\[ - \frac{\pi}{2} &lt; x &lt; \frac{\pi}{2} \]</div>

    <v-alert dense dark color="error" class="bold mt-5 mb-0">？？？</v-alert>
    <div v-katex>$$ \begin{aligned} \left\{ \begin{array}{l} x + y = 10 \\ 2x + 4y = 32 \end{array} \right. \end{aligned} $$</div>

    <v-alert dense dark color="error" class="bold mt-5 mb-0">論理式</v-alert>
    <div v-katex>\[ \overline{ (A\cap B) } = \overline{ A } \cup \overline{ B } \]</div>

    <v-alert dense dark color="error" class="bold mt-5 mb-0">論理式</v-alert>
    <div v-katex>\[ x = 1 \Rightarrow x^2 = 1 \]</div>

    <v-alert dense dark color="error" class="bold mt-5 mb-0">論理式</v-alert>
    <div v-katex>\[ x = 2 \Rightarrow x^2 = 4 \Rightarrow x^3 = 8 \]</div>

    <v-alert dense dark color="error" class="bold mt-5 mb-0">論理式</v-alert>
    <div v-katex>\[ x &lt; 2 \Rightarrow x^2 &lt; 4 \Rightarrow x^3 &lt; 8 \]</div>

    <v-alert dense dark color="cyan darken-3" class="bold mt-5 mb-0">等式 (⇒無し)</v-alert>
    <div v-katex>\[ A \cdot (B+C)^2 = A \cdot (B^2 + 2BC + C^2) = AB^2 + 2ABC + AC^2 \]</div>

    <v-alert dense dark color="cyan darken-3" class="bold mt-5 mb-0">等式 (⇒無し)</v-alert>
    <div v-katex>\[ [x] = \lfloor x \rfloor = \max\{ n\in\mathbb{Z} \mid n \leqq x \} \]</div>

    <v-alert dense dark color="cyan darken-3" class="bold mt-5 mb-0">等式 (⇒無し)</v-alert>
    <div v-katex>$$ \mathbb{N}=\left\{n\mid n=1,2,3,\cdots \right\}=\{1,2,3,4,5,\cdots \} $$</div>

    <v-alert dense dark color="cyan darken-3" class="bold mt-5 mb-0">等式 (⇒無し)</v-alert>
    <div v-katex>$$ A = \left\{n^2 \mid n=1,2,3,\cdots \right\}=\{1,4,9,16,25,\cdots \} $$</div>

    <v-alert dense dark color="cyan darken-3" class="bold mt-5 mb-0">等式 (⇒無し)</v-alert>
    <div v-katex>$$ \mathbb{N}=\left\{n\mid n=1,2,3,\cdots \right\} $$</div>

    <v-alert dense dark color="blue-grey" class="bold mt-5 mb-0">アステロイド</v-alert>
    <div v-katex>
      アステロイドとは$x^{2\over 3}+y^{2\over 3}=a^{2\over 3}$で表される図形のことで、星芒形とも呼ばれる。
      アステロイドは以下のように媒介変数表示される。 $$ \begin{aligned} x=a \cos^3{x} \\ y=a \sin^3{y} \end{aligned}$$
    </div>

    <v-alert dense dark color="blue-grey" class="bold mt-5 mb-0">行列・行列式</v-alert>
    <div v-katex>
      $$\begin{pmatrix} a & b \\ c & d \\ \end{pmatrix} $$ $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6\\ \end{pmatrix}$$
      次の行列Aの行列式を余因子展開を用いて考える$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6\\ 7 & 8 & 9 \end{pmatrix}$$
      行列式はその1つの行あるいは列に沿って余因子展開し計算することができる。例えば、第1行に沿って展開すると
      <!-- pattern-1 -->
      $$ \begin{aligned} |A| &= \begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6\\ 7 & 8 & 9 \end{vmatrix} \\ &= 1 \cdot \begin{vmatrix} 5 &
      6 \\ 8 & 9 \end{vmatrix} - 2 \cdot \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} + 3 \cdot \begin{vmatrix} 4 & 5 \\ 7 & 8
      \end{vmatrix} \\ &= 1 \cdot (-3) -2 \cdot (-6) +3 \cdot (-3) \\ &= 0 \end{aligned} $$
      <!-- pattern-2 -->

      <!-- $$ \begin{aligned} |A| = \begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6\\ 7
            & 8 & 9 \end{vmatrix} &= 1 \cdot \begin{vmatrix} 5 & 6 \\ 8 & 9
            \end{vmatrix} - 2 \cdot \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix}
            + 3 \cdot \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} \\ &= 1 \cdot
            (-3) -2 \cdot (-6) +3 \cdot (-3) \\ &= 0 \end{aligned} $$ -->

      <!--  -->
      第2列に沿って余因子展開すると次のようになる $$ \begin{aligned} |A| &= -2 \cdot \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix}
      +5 \cdot \begin{vmatrix} 1 & 3 \\ 7 & 9 \end{vmatrix} -8 \cdot \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} \\ &= -2 \cdot
      (-6) + 5 \cdot (-12) -8 \cdot (-6) \\ &= 0 \end{aligned}$$
    </div>

    <v-alert dense dark color="blue-grey" class="bold mt-5 mb-0">1行</v-alert>
    <div v-katex>\[e^x = 1\]</div>
    <v-alert dense dark color="blue-grey" class="bold mt-5 mb-0">1行</v-alert>
    <div v-katex>\[ \frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}} \]</div>
    <v-alert dense dark color="blue-grey" class="bold mt-5 mb-0">1行</v-alert>
    <div v-katex>\[ y' = \cos{x} \]</div>

    <v-alert dense type="success" class="bold mt-5 mb-0">7行 2列 等式変形</v-alert>
    <div v-katex:auto>
      \[ \begin{aligned} l &= \int_0^{2\pi} \sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}dt \\ &= \int_0^{2\pi}
      \sqrt{a^2(1-\cos{t})^2 + a^2\sin^2{t}}dt \\ &= \int_0^{2\pi} \sqrt{2a^2(1-\cos{t})}dt \\ &= \sqrt{2}a \int_0^{2\pi}
      \sqrt{2\sin^2{\frac{t}{2}}}dt\\ &= 2a \int_0^{2\pi} \sin{\frac{t}{2}} dt \\ &= 2a \left[-2 \cos{\frac{t}{2}}\right]_0^{2\pi}
      \\ &= 8a \end{aligned} \]
    </div>
    <v-alert dense type="success" class="bold mt-5 mb-0">7行 変則列 等式変形</v-alert>
    <div v-katex:auto>
      \[ \begin{aligned} l &= \int_0^{2\pi} \sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}dt \\ &= \int_0^{2\pi}
      \sqrt{a^2(1-\cos{t})^2 + a^2\sin^2{t}}dt \\ &= \int_0^{2\pi} \sqrt{2a^2(1-\cos{t})}dt \\ &= \sqrt{2}a \int_0^{2\pi}
      \sqrt{2\sin^2{\frac{t}{2}}}dt\\ &= 2a \int_0^{2\pi} \sin{\frac{t}{2}} dt = 2a \left[-2 \cos{\frac{t}{2}}\right]_0^{2\pi} \\
      &= 8a \end{aligned} \]
    </div>

    <v-alert dense type="success" class="bold mt-5 mb-0">4行 等式変形</v-alert>
    <div v-katex:auto>
      $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
      \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
      \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
    </div>

    <v-alert dense type="success" class="bold mt-5 mb-0">4行 等式変形</v-alert>
    <div v-katex>
      $$ \begin{aligned} (\sin{x})' &= \lim_{h \to 0} \frac{\sin(x+h)-\sin(x)}{h} \\ &= \lim_{h \to 0} \frac{2\cos \left(
      \frac{2x+h}{2} \right) \cdot \sin \left( \frac{h}{2} \right)}{h} \\ &= \lim_{h \to 0} \left\{ \cos{\left( \frac{2x+h}{2}
      \right)} \cdot \frac{\sin{\left( \frac{h}{2} \right)}}{\frac{h}{2}} \right\} \\ &= \cos(x)
      \qquad\qquad\qquad\qquad\qquad\qquad \left( \because\lim_{h \to 0} \frac{\sin{x}}{x} = 1 \right) \end{aligned} $$
    </div>

    <v-alert dense type="warning" class="bold mt-5 mb-0">3行 繁分数</v-alert>
    <div v-katex:auto class="message">
      \[ \begin{aligned} ax^2 + y^4 &= \frac{2}{3+x} \\ x^{-3x} \cdot y^2 &= \frac{4x}{3} \\ 18x^{x} &=
      \frac{4x}{\frac{x^2}{3}+\frac{2x}{\log{x}}} \end{aligned} \]
    </div>
    <v-alert dense type="warning" class="bold mt-5 mb-0">5行</v-alert>
    <div v-katex:auto class="message">
      \[ \begin{aligned} a &= \frac{\int_0^{\pi} x dx}{2}\\ b &= \frac{4}{3} \\ c &= \sqrt{2} \\ d &= a+b \\ e &= \frac{c}{d}
      \end{aligned} \]
    </div>

    <v-alert dense type="info" class="bold">1行 等式変形 横長</v-alert>
    <div v-katex:auto style="overflow-x: auto">
      $$ \int \frac{1}{x(x+2)}dx = \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx = \frac{1}{2}\int \frac{1}{x}dx -
      \frac{1}{2}\int \frac{1}{x+2}dx = \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C = \frac{1}{2}\log
      \left|\frac{x}{x+2}\right|+C $$
    </div>

    <v-alert dense type="info" class="bold">1行 等式変形 横長</v-alert>
    <div v-katex:auto style="overflow-x: auto">
      $$ \sum_{n=1}^{\infty} ar^{n-1} = a + ar + ar^2 + ar^3 + \cdots + ar^{n-1} + \cdots = \frac{a}{1-r} $$
    </div>

    <v-alert dense type="info" class="bold">1行 等式変形 横長</v-alert>
    <div v-katex:auto style="overflow-x: auto">
      $$ \left\{ \frac{f(x)}{g(x)} \right\}' = \left\{ f(x) \cdot \frac{1}{g(x)} \right\}' = f'(x) \left( \frac{1}{g(x)} \right) +
      f(x) \cdot \left( \frac{1}{g(x)} \right)' = \frac{f'(x)}{g(x)} + f(x) \cdot \frac{-g'(x)}{\left\{ g(x) \right\}^2} =
      \frac{f'(x)g(x)-f(x)g'(x)}{\left\{ g(x) \right\}^2} $$
    </div>

    <v-alert dense type="info" class="bold">1行 等式変形 横長</v-alert>
    <div v-katex:auto style="overflow-x: auto">
      $$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k+1} \right) = \left( \frac{1}{1} -
      \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \cdots + \left(
      \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1} $$
    </div>

    <!-- <v-alert dense dark color="error" class="bold mt-5 mb-0">1行</v-alert>
        <div v-katex>
            \[ \begin{aligned} & & {}^\forall \varepsilon \gt 0, {}^\exists
            \delta \gt 0 \mbox{ s.t. } \\ & & {}^\forall x \in \mathbb{ R }, 0
            \lt |x - a| \lt \delta \implies |f(x) - b| \lt \varepsilon
            \end{aligned} \]
        </div>
        <v-alert dense dark color="error" class="bold mt-5 mb-0">1行</v-alert>
        <div v-katex>
            $$\color{ #ff0000 }{a \times b}$$
        </div> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.b()

    this.$katexLocalStorage()
    const katexStatus = this.$getKatexStatus()
    this.$katexCollapsible(true, false, katexStatus)
    this.$katexContextMenu()
  },
  methods: {
    b() {
      const katexs = document.getElementsByClassName('katex')
      Array.from(katexs).forEach((katex) => {
        katex.style.border = '1px solid pink'
      })
      const bases = document.getElementsByClassName('base')
      Array.from(bases).forEach((base) => {
        base.style.border = '1px dashed green'
      })
      const phraseEnds = document.getElementsByClassName('phrase_end')
      Array.from(phraseEnds).forEach((phraseEnd) => {
        phraseEnd.style.border = '1px dashed red'
      })
      const matrixClass = Array.from(document.getElementsByClassName('matrix-mtable'))
      matrixClass.forEach((matrix, i) => {
        matrix.style.border = '2px dashed blue'
      })
    },
  },
}
</script>
