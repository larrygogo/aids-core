"use strict";

/**
 * Created by Gqb on 14/11/18.
 */
module.exports = {
  id: 'lyid',
  parse: function (file) {
    return file.readInt();
  }
};