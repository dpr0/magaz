require("jquery")
require("@nathanvda/cocoon")

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'popper.js'
import './stylesheets/application'

Rails.start()
ActiveStorage.start()
