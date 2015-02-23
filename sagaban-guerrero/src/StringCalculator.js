var GildedRose = function () {

  var itemsInfo = [
    ["+5 Dexterity Vest", 10, 20],
    ["Aged Brie", 2, 0],
    ["Elixir of the Mongoose", 5, 7],
    ["Sulfuras, Hand of Ragnaros", 0, 80],
    ["Backstage passes to a TAFKAL80ETC concert", 15, 20],
    ["Conjured Mana Cake", 3, 6]
  ];

  var items = [];

  // Initialize each item with with specific info
  itemsInfo.forEach(function (item) {
    items.push(new Item(item[0], item[1], item[2]));
  })

  // Change the quality of each item by type
  GildedRose.updateQuality(items);
};

GildedRose.updateQuality = function (items) {
  items.forEach(function (item) {

    // Set update quality behaviour for each item type
    switch (item.name) {
      case "Aged Brie":
        item.quality++;
      break;
      case "Conjured Mana Cake":
        if (item.sellIn >= 0) {
          item.quality -= 2;
        } else {
          item.quality -= 4;
        }
      break;
      case "Backstage passes to a TAFKAL80ETC concert":
        if (item.sellIn > 9) {
          item.quality += 1;
        } else if (item.sellIn > 4) {
          item.quality += 2;
        } else if (item.sellIn > 0) {
          item.quality += 3;
        } else {
          item.quality = 0;
        }
      break;
      case "Sulfuras, Hand of Ragnaros":
      break;
      default:
        // Set behaviour for no special items
        if (item.sellIn >= 0) {
          item.quality -= 1;
        } else {
          item.quality -= 2;
        }
      break;
    }

    // Prevent item quality to be greater than 50 if item is not Sulfuras type
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      if (item.quality > 50) {
        item.quality = 50;
      } else if (item.quality < 0) {
        item.quality = 0;
      }
    }

    // Update number of remaining days we have to sell the item
    item.sellIn--;
  });

  return items;
};