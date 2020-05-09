import * as React from 'react';
import { Input, Button } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            title: props.title,
            content: props.content,
            createTime: props.createTime,
            updateTime: new Date()
        };
        this.setTitle = this.setTitle.bind(this);
        this.save = this.save.bind(this);
        this.setContent = this.setContent.bind(this);
    }

    setTitle(e) {
        this.setState({title: e.target.value});
    }

    setContent(value) {
        this.setState({content: value});
    }

    save(value) {
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <Input type="text" value={this.props.title} onChange={this.setTitle}/>
                <MdEditor
                    value={this.props.content}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={this.setContent}
                />
                <div>
                    <Button type="primary" onClick={this.save}>保存</Button>
                </div>
            </div>
        )
    }
}

export default EditComponent;
