class ProductController {
    index = (req, res) => {
        res.send("Get all product successfully...");
    }

    show = (req, res) => {
        const id = req.params.id;
        res.send(`Get product by id ${id} successfully...`);
    }

    create = (req, res) => {
        res.send("Create product successfully...");
    }

    update = (req, res) => {
        const id = req.params.id;
        res.send(`Update product by id ${id} successfully...`);
    }

    destroy = (req, res) => {
        const id = req.query.id;
        res.send(`Delete product by id ${id} successfully...`);
    }
}

export default new ProductController();