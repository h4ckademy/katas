describe("Receive string with numbers", function () {
  describe("Receive an empty string returns 0", function () {
    it("should returns 0", function() {
      expect(Add("")).toEqual(0);
    });
  });
});