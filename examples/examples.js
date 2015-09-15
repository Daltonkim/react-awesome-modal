import React  from 'react';
import Modal  from '../lib/index.js';

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="OPEN" onClick={this.openModal.bind(this)} />
                <Modal visible={this.state.visible} closeFn={this.closeModal.bind(this)}>
                    <div>
                        <h1>モーダル</h1>
                        <p>hogehogehogehogehogehogehoge</p>
                        <a href="javascript:void(0);" onClick={this.closeModal.bind(this)}>閉じる</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
