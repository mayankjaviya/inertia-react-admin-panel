import React from "react";
import "../../../css/sidebars.css";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function AddCategory(props) {

    const {show, handleClose} = props;
    const { data, setData , errors, post, processing} = useForm({
        name: "",
        slug: "",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
          const reader = new FileReader();

          reader.onload = (event) => {
            // Update the state with the data URL of the selected image
            setData('image',event.target.result);
          };

          reader.readAsDataURL(file);
        }
      }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
                <form>
                    <div className="form-group my-1">
                        <label htmlFor="name">Category Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter category name" value={data.name}/>
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="name">Category Slug</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter category slug" value={data.slug} />
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="description">Category Image</label>
                        <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange}/>
                        <img src={data.image} alt="" height="100px" width="100px" className="mt-2" style={{  objectFit: "cover" }} />
                    </div>
                </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    );
}
