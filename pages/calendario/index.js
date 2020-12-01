import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';

export default function Calendario() {
  // set states of calendar date
  const [calDate, setCalDate] = useState(new Date())

  function onChange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate)
  }

  return (
    <View>
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-10-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2021-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => 
          {setCalDate(day)
            return(calDate.dateString)
          }

        }

      />
    </View>
  )

}
