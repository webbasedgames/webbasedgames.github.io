!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ''),
    i((i.s = 0));
})([
  function (t, e, i) {
    'use strict';
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    i.r(e);
    var o = (function () {
      function t(e, i, n) {
        var o = n.x,
          r = n.y;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.context = e),
          (this.grid = i),
          (this.x = o),
          (this.y = r),
          (this.dx = i),
          (this.dy = 0),
          (this.cells = []),
          (this.maxCells = 4);
      }
      var e, i, o;
      return (
        (e = t),
        (i = [
          {
            key: 'setKeyboardControls',
            value: function () {
              var t = this;
              document.addEventListener('keydown', function (e) {
                37 === e.which && 0 === t.dx
                  ? ((t.dx = -t.grid), (t.dy = 0))
                  : 38 === e.which && 0 === t.dy
                  ? ((t.dy = -t.grid), (t.dx = 0))
                  : 39 === e.which && 0 === t.dx
                  ? ((t.dx = t.grid), (t.dy = 0))
                  : 40 === e.which &&
                    0 === t.dy &&
                    ((t.dy = t.grid), (t.dx = 0));
              });
            },
          },
          {
            key: 'setCollisionObject',
            value: function (t, e) {
              (this.collisionObject = t), (this.onCollision = e);
            },
          },
          {
            key: 'onBite',
            value: function (t) {
              this.onBodyBite = t;
            },
          },
          {
            key: 'reset',
            value: function () {
              (this.x = 160),
                (this.y = 160),
                (this.cells = []),
                (this.maxCells = 4),
                (this.dx = this.grid),
                (this.dy = 0);
            },
          },
          {
            key: 'move',
            value: function () {
              var t = this,
                e = this.context.canvas;
              this.context.clearRect(0, 0, e.width, e.height),
                (this.x += this.dx),
                (this.y += this.dy),
                this.x < 0
                  ? (this.x = e.width - this.grid)
                  : this.x >= e.width && (this.x = 0),
                this.y < 0
                  ? (this.y = e.height - this.grid)
                  : this.y >= e.height && (this.y = 0),
                this.cells.unshift({ x: this.x, y: this.y }),
                this.cells.length > this.maxCells && this.cells.pop(),
                (this.context.fillStyle = 'yellow'),
                this.cells.forEach(function (e, i) {
                  t.context.fillRect(e.x, e.y, t.grid - 1, t.grid - 1),
                    e.x === t.collisionObject.x &&
                      e.y === t.collisionObject.y &&
                      (t.maxCells++, t.onCollision());
                  for (var n = i + 1; n < t.cells.length; n++)
                    e.x === t.cells[n].x &&
                      e.y === t.cells[n].y &&
                      t.onBodyBite();
                });
            },
          },
        ]) && n(e.prototype, i),
        o && n(e, o),
        t
      );
    })();
    function r(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function s(t, e) {
      return Math.floor(Math.random() * (e - t)) + t;
    }
    var l = (function () {
        function t(e, i, n) {
          var o = n.x,
            r = n.y;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.grid = i),
            (this.x = o),
            (this.y = r);
        }
        var e, i, n;
        return (
          (e = t),
          (i = [
            {
              key: 'drop',
              value: function () {
                (this.context.fillStyle = 'red'),
                  this.context.fillRect(
                    this.x,
                    this.y,
                    this.grid - 1,
                    this.grid - 1
                  );
              },
            },
            {
              key: 'spawn',
              value: function () {
                (this.x = s(0, 25) * this.grid),
                  (this.y = s(0, 25) * this.grid);
              },
            },
          ]) && r(e.prototype, i),
          n && r(e, n),
          t
        );
      })(),
      c = document.createElement('CANVAS');
    c.setAttribute('height', '400'),
      c.setAttribute('width', '400'),
      (c.style.backgroundColor = '#000000'),
      document.body.appendChild(c);
    var h = c.getContext('2d'),
      a = 0,
      u = new l(h, 16, { x: 320, y: 320 }),
      d = new o(h, 16, { x: 160, y: 160 });
    d.setCollisionObject(u, function () {
      u.spawn();
    }),
      d.onBite(function () {
        d.reset();
      }),
      d.setKeyboardControls(),
      requestAnimationFrame(function t() {
        requestAnimationFrame(t), ++a < 4 || ((a = 0), d.move(), u.drop());
      });
  },
]);
