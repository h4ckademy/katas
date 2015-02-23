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
});