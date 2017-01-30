  /**
  * @ngdoc service
  * @name rx.observeOnSope
  *
  * @requires rx.rx
  *
  * @description
  * An observer function that returns a function for a given `scope`,
  * `watchExpression` and `objectEquality` object. The returned function
  * delegates to an Angular watcher.
  *
  * @param {object} scope Scope object.
  * @param {(string|object)} watchExpression Watch expression.
  * @param {boolean} objectEquality Object to compare for object equality.
  *
  * @return {function} Factory function that creates obersables.
  */
  rxModule.factory('observeOnScope', function(rx) {
    return function(scope, watchExpression, objectEquality) {
      return new rx.Observable(function (observer) {
        return scope.$watch(
          watchExpression,
          function (newValue, oldValue) {
            observer.next({oldValue: oldValue, newValue: newValue});
          },
          objectEquality
        );
      });
    };
  });
