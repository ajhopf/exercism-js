// @ts-check

import { formatWithOptions } from 'util';
import { runInThisContext } from 'vm';

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

//exercise 1 -> using prototype syntax

export function Size(width = 80, height = 60) {
  (this.width = width), (this.height = height);
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

//exercise 2 -> using prototype syntax
export function Position(x = 0, y = 0) {
  (this.x = x), (this.y = y);
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

//exercise 3 and beyond -> class syntax

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    this.size = size;

    if (this.size.width > this.screenSize.width) {
      this.size.width = this.screenSize.width;
    }

    if (this.size.height > this.screenSize.height) {
      this.size.height = this.screenSize.height;
    }

    if (this.size.width < 1) {
      this.size.width = 1;
    }

    if (this.size.height < 1) {
      this.size.height = 1;
    }
    //resizing according to position
    if (this.size.width > this.screenSize.width - this.size.width) {
      this.size.width = this.screenSize.width - this.position.x;
    }

    if (this.size.height > this.screenSize.height - this.size.height) {
      this.size.height = this.screenSize.height - this.position.y;
    }

    return this.size;
  }

  move(position) {
    this.position = position;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }

    if (this.position.x > this.screenSize.width - this.size.width) {
      this.position.x = this.screenSize.width - this.size.width;
    }

    if (this.position.y > this.screenSize.height - this.size.height) {
      this.position.y = this.screenSize.height - this.size.height;
    }
  }
}

export function changeWindow(programWindow) {
  const size = new Size(400, 300);
  const position = new Position(100, 150);

  programWindow.resize(size);
  programWindow.move(position);

  return programWindow;
}
