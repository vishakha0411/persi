exports.changePrice = async (req, res) => {
    try {
      const { id } = req.params;
      const { newPrice } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id },
        { price: newPrice },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(499).json({
          success: false,
          message: "invalid product objcet id",
        });
      }
      return res.status(200).json({
        success: true,
        data: updatedProduct,
        message: "product price updated!",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  };