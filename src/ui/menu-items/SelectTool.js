import MenuItem from "./MenuItem";
import icon from "@icon/icon";
import { EVENT } from "@core/UIElement";
 
export default class SelectTool extends MenuItem {
  getIconString() {
    return icon.near_me;
  }
  getIcon() {
    return 'flipY'
  }
  getTitle() {
    return this.props.title || "Select";
  }

  clickButton(e) {
    this.emit('addLayerView', 'select');
  }

  [EVENT('addLayerView')] (type) {
    this.setSelected(type === 'select');
  }      
}
