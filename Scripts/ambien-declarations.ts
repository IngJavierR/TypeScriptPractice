/// <reference path="../node_modules/@types/knockout/index.d.ts"/>
module demo_02_02{
  declare var ko: KnockoutStatic;
  var name = ko.observable('John Papa');
  var id = ko.observable(1);
  var guy = {
    id: id,
    fullName: name
  };

  var value: string = guy.fullName();
}
