describe("Receive string with numbers", function () {
  describe("Receive an empty string returns 0", function () {
    it("should returns 0", function() {
      expect(Add("")).toEqual(0);
    });
  });

  describe("Receive only one number and return it", function(){
  	it("Add ('2') should return 2", function (){
  		expect(Add('2')).toEqual(2);
  	});
  });

  describe("Receive two numbers and return the sum of them", function() {
  	it("Add('1,2') should return 3", function() {
  		expect(Add('1,2')).toEqual(3);
  	});
  });

  describe("Allow the Add method to handle an unknown amount of numbers", function() {
  	it("Add('4,2,6,11') should return 23", function() {
  		expect(Add('4,2,6,11')).toEqual(23);
  	});
  });

  describe("Allow the Add method to handle newlines between numbers", function() {
    it("Add('1\n2\n3,4') should return 9.9", function(){
      expect(Add('1\n2\n3,4')).toEqual(10);
    });

    it("Add('1,\n') should not work", function(){
      expect(function() { Add('1,\n') }).toThrow(new Error("Delimiter misplace"));
    });
  });
});